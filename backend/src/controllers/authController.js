import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

import sendEmail from "../utils/sendEmail.js";
import { body } from "express-validator";

const generateToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
};

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser =
      (await User.findOne({ email })) || (await User.findOne({ username }));
    if (existingUser) {
      return res.status(409).json({
        msg: "User already exists!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser;
    if (process.env.EMAIL_USER === email) {
      newUser = new User({
        username,
        email,
        password: hashedPassword,
        isVerified: true,
        role: "admin",
      });
    } else {
      newUser = new User({
        username,
        email,
        password: hashedPassword,
        role: "customer",
      });
    }
    await newUser.save();

    const verificationToken = generateToken({ email: req.body.email });
    const token = generateToken({ id: newUser._id });
    const verificationLink = `${process.env.FRONT_END_URL}/verify-email?token=${verificationToken}`;

    process.env.EMAIL_USER != email &&
      sendEmail(
        newUser.email,
        "Verify Your Email",
        `Click here to verify your email: ${verificationLink}`
      );
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ msg: `Something went wrong: ${error.message}` });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ msg: "Invalid credentials!" });
    }

    const token = generateToken({ user });

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ msg: `Something went wrong: ${error.message}` });
  }
};

export const verifyEmail = async (req, res) => {
  const { token } = req.query;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    user.isVerified = true;
    await user.save();

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ msg: "Invalid or expired token" });
  }
};

export const resendEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const verificationToken = generateToken({ email });
    const verificationLink = `${process.env.FRONT_END_URL}/verify-email?token=${verificationToken}`;

    await sendEmail(
      email,
      "Verify Your Email",
      `Click here to verify your email: ${verificationLink}`
    );
    res.status(200).json({
      msg: "The email has been successfully resent. Please check your inbox.",
    });
  } catch (error) {
    res.status(400).json({
      msg: "There was an issue resending the email. Please try again later.",
    });
  }
};
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const resetToken = generateToken({ email: user.email });
    const resetLink = `${process.env.FRONT_END_URL}/reset-password?token=${resetToken}`;
    await sendEmail(
      user.email,
      "Reset Your Password",
      `Click here to reset your password: ${resetLink}`
    );

    res.status(200).json({
      msg: "A password reset email has been sent successfully. Please check your inbox (and spam/junk folder) for further instructions.",
    });
  } catch (error) {
    res.status(400).json({ msg: "Server error: Something went wrong!" });
  }
};

export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }
    
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json({ msg: "Password reset successful" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Invalid or expired token" });
  }
};

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

import sendEmail from "../utils/sendEmail.js";
import sendVerification from "../utils/sendVerification.js";
import { generateAccessToken, generateRefreshToken } from "../utils/tokens.js";

const FRONT = process.env.FRONT_END_URL;
const ADMIN_EMAIL = process.env.EMAIL_USER;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET;

export const cookieOptions = {
  path: "/",
  httpOnly: true,
  sameSite: "strict",
  maxAge: 15 * 24 * 60 * 60 * 1000,
  secure: process.env.NODE_ENV === "production",
};

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser =
      (await User.findOne({ email })) || (await User.findOne({ username }));

    if (existingUser) {
      return res.status(409).json({
        msg: "An account with this email or username already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser;

    newUser = new User({
      email,
      username,
      role: ADMIN_EMAIL === email ? "admin" : "customer",
      isVerified: ADMIN_EMAIL === email,
      password: hashedPassword,
    });

    await newUser.save();

    if (email !== ADMIN_EMAIL) {
      await sendVerification(email);
    }

    const token = generateAccessToken({ email: newUser.email });
    const refreshToken = generateRefreshToken({ email: newUser.email });

    res.cookie("refreshToken", refreshToken, cookieOptions);

    res.status(200).json({ user: newUser, token });
  } catch {
    res
      .status(500)
      .json({ msg: "An unexpected error occurred. Please try again later." });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "Invalid email or password." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ msg: "Invalid email or password." });
    }

    if (!user.isVerified) {
      sendVerification(email);
      return res.status(403).json({
        msg: "Your email is not verified. A new verification email has been sent.",
      });
    }

    const accessToken = generateAccessToken({ email: user.email });
    const refreshToken = generateRefreshToken({ email: user.email });

    res.cookie("refreshToken", refreshToken, cookieOptions);

    res.status(200).json({ user, token: accessToken });
  } catch {
    res
      .status(500)
      .json({ msg: "An unexpected error occurred. Please try again later." });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("refreshToken", cookieOptions);
  res.status(200).json({ msg: "You have been logged out successfully." });
};

export const verifyEmail = async (req, res) => {
  const { token } = req.query;

  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN);
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(400).json({ msg: "Unable to verify this email." });
    }

    user.isVerified = true;
    await user.save();

    res.status(200).json({ msg: "Email verified successfully." });
  } catch (error) {
    if (error.message === "jwt expired") {
      const decoded = jwt.decode(token);

      if (decoded?.email) {
        const user = await User.findOne({ email: decoded.email });

        if (user) {
          sendVerification(user.email);
          return res.status(400).json({
            msg: "This verification link has expired. A new one has been sent to your email.",
            email: decoded.email,
          });
        }
      }
    }

    return res
      .status(400)
      .json({ msg: "The verification link is invalid or expired." });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ msg: "No account is associated with this email." });
    }

    const resetToken = generateAccessToken({ email: user.email });
    const resetLink = `${FRONT}/reset-password?token=${resetToken}`;
    await sendEmail(
      user.email,
      "Reset Your Password",
      `Click here to reset your password: ${resetLink}`
    );

    res.status(200).json({
      msg: "A password reset email has been sent. Please check your inbox.",
    });
  } catch {
    res
      .status(400)
      .json({ msg: "An unexpected error occurred. Please try again later." });
  }
};

export const resetPassword = async (req, res) => {
  const { token, password } = req.body;

  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN);
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res
        .status(400)
        .json({ msg: "Unable to reset password for this account." });
    }

    user.password = await bcrypt.hash(password, 10);
    await user.save();

    res.status(200).json({
      msg: "Your password has been reset successfully. Please sign in.",
    });
  } catch (error) {
    res.status(400).json({ msg: "The reset link is invalid or expired." });
  }
};

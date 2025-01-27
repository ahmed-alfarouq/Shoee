import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
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

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: "customer",
    });

    await newUser.save();

    const token = generateAccessToken(newUser);

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

    const token = generateAccessToken(user);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ msg: `Something went wrong: ${error.message}` });
  }
};

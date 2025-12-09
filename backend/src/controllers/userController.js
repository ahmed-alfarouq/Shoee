import sharp from "sharp";
import bcrypt from "bcrypt";
import { del, put } from "@vercel/blob";
import { v4 as uuidv4 } from "uuid";

import User from "../models/userModel.js";

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

export const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: "No file uploaded!" });

    const file = req.file;

    const buffer = await sharp(file.buffer)
      .resize(200, 200, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .png({ quality: 80 })
      .toBuffer();

    const blob = await put(
      `${uuidv4()}-${file.originalname}`,
      buffer,
      {
        access: "public",
      },
      BLOB_TOKEN
    );

    const user = req.user;
    const prevAvatar = user.avatar;

    if (prevAvatar) {
      await del(prevAvatar, { token: BLOB_TOKEN });
    }

    user.avatar = blob.url;
    await user.save();

    res
      .status(200)
      .json({ msg: "File uploaded successfully!", avatar: blob.url });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Something went wrong!" });
  }
};

export const updateUsername = async (req, res) => {
  try {
    const user = req.user;
    const { newUsername } = req.body;

    const existingUser = await User.findOne({ username: newUsername });

    if (existingUser) {
      return res.status(409).json({
        msg: "Username already exists!",
      });
    }

    user.username = newUsername;
    await user.save();

    return res
      .status(200)
      .json({ msg: "Username updated successfully.", username: newUsername });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong!" });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const user = req.user;
    const { oldPassword, newPassword } = req.body;

    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ msg: "Invalid credentials!" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    return res.status(200).json({ msg: "password updated successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong!" });
  }
};

export const updateBillingDetails = async (req, res) => {
  try {
    const user = req.user;
    const { billing_details } = req.body;

    user.billing_details = billing_details;
    await user.save();

    return res.status(200).json({
      msg: "Billing details updated successfully.",
      billing_details: billing_details,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong!" });
  }
};

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

    return res
      .status(200)
      .json({ msg: "Password has been updated successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong!" });
  }
};

export const createAddress = async (req, res) => {
  try {
    const user = req.user;
    const addressData = req.body;

    // If first address → make it default automatically
    if (!user.addresses.length) {
      addressData.isDefault = true;
    }

    // If client sets default = true → unset others
    if (addressData.default === true) {
      user.addresses.forEach((addr) => {
        addr.isDefault = false;
      });
    }

    user.addresses.push(addressData);
    await user.save();

    const newAddress = user.addresses[user.addresses.length - 1];

    return res.status(201).json({
      msg: "Address created successfully",
      addresses: user.addresses,
      address: newAddress,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Something went wrong!" });
  }
};

export const updateAddress = async (req, res) => {
  try {
    const { id, ...updates } = req.body;

    if (!id) {
      return res.status(404).json({ msg: "Address id isn't valid!" });
    }

    const user = req.user;

    const address = user.addresses.id(id);

    if (!address) {
      return res.status(404).json({ msg: "Address not found!" });
    }

    Object.assign(address, updates);

    await user.save();

    return res.status(200).json({
      msg: "Billing details updated successfully.",
      addresses: user.addresses,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Something went wrong!" });
  }
};

export const removeAddress = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ msg: "Address ID is required!" });
    }

    const user = req.user;

    const address = user.addresses.id(id);

    if (!address) {
      return res.status(404).json({ msg: "Address not found!" });
    }

    address.deleteOne();

    if (address.isDefault && user.addresses.length > 0) {
      user.addresses[0].isDefault = true;
    }

    await user.save();

    return res.status(200).json({
      msg: "Address deleted successfully",
      addresses: user.addresses,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Something went wrong!" });
  }
};

export const updateDefaultAddress = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(404).json({ msg: "Address id isn't valid!" });
    }

    const user = req.user;

    const address = user.addresses.id(id);

    if (!address) {
      return res.status(404).json({ msg: "Address not found!" });
    }

    user.addresses.forEach((addr) => {
      addr.isDefault = false;
    });

    Object.assign(address, { isDefault: true });

    await user.save();

    return res.status(202).json({
      msg: "Default address updated successfully",
      addresses: user.addresses,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Something went wrong!" });
  }
};

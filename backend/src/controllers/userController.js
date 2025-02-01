import sharp from "sharp";
import User from "../models/userModel.js";
import { del, put } from "@vercel/blob";
import { v4 as uuidv4 } from "uuid";

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

    const user = await User.findOne({ email: req.user.email });
    const prevAvatar = user.avatar;

    await del(prevAvatar, { token: BLOB_TOKEN });

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

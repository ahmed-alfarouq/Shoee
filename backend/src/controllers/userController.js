import sharp from "sharp";
import User from "../models/userModel.js";

export const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: "No file uploaded!" });

    const filePath = `public/images/${req.file.filename}`;
    const format = req.body.format || "webp";

    const user = await User.findOne({ email: req.user.email });
    await sharp(filePath)
      .resize(200, 200)
      .toFormat(format, { quality: 80 })
      .toFile(outputFilePath);

    user.avatar = filePath;
    await user.save();

    res.status(200).json({ msg: "Upload successful!", filePath });
  } catch (error) {
    res.status(500).json({ msg: `Something went wrong: ${error.message}` });
  }
};

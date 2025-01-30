import sharp from "sharp";
import User from "../models/userModel.js";
import fs from "fs";

export const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: "No file uploaded!" });

    const tempFilePath = req.file.path;
    const outputFilePath = `public/images/${Date.now()}-${req.file.filename}`;
    const format = req.body.format || "webp";

    const user = await User.findOne({ email: req.user.email });
    await sharp(tempFilePath)
      .resize(200, 200)
      .toFormat(format, { quality: 80 })
      .toFile(outputFilePath);

    fs.unlinkSync(tempFilePath);

    user.avatar = outputFilePath;
    await user.save();

    res.status(200).json({
      msg: "Upload successful!",
      avatar: `${process.env.BACK_END_URL}/${outputFilePath}`,
    });
  } catch (error) {
    res.status(500).json({ msg: `Something went wrong: ${error.message}` });
  }
};

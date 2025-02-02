import jwt from "jsonwebtoken";
import { generateAccessToken } from "../utils/tokens.js";
import User from "../models/userModel.js";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
      if (!err) {
        const user = await User.findOne({ email: decoded.email });
        req.user = user;
        return next();
      }

      if (err.name === "TokenExpiredError") {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
          return res.status(401).json({ msg: "No refresh token provided!" });
        }

        try {
          const decodedRefresh = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
          );
          const user = await User.findOne({ email: decodedRefresh.email });

          if (!user) {
            return res.status(403).json({ msg: "Invalid refresh token" });
          }

          const newAccessToken = generateAccessToken({ email: user.email });
          req.user = user;
          res.setHeader("Authorization", `Bearer ${newAccessToken}`);
          return next();
        } catch (refreshError) {
          return res.status(403).json({ msg: "Invalid refresh token" });
        }
      } else {
        return res.status(401).json({ msg: "Invalid token" });
      }
    });
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

export default authMiddleware;

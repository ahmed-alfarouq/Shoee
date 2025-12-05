import express from "express";
import {
  login,
  signup,
  logout,
  verifyEmail,
  resetPassword,
  forgotPassword,
} from "../controllers/authController.js";
import signupValidator from "../middleware/signupValidator.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/verify-email", verifyEmail);
router.post("/reset-password", resetPassword);
router.post("/signup", signupValidator, signup);
router.post("/forgot-password", forgotPassword);

export default router;

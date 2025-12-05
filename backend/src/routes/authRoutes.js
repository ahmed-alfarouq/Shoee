import express from "express";
import {
  signup,
  login,
  verifyEmail,
  resendEmail,
  forgotPassword,
  resetPassword,
  logout,
} from "../controllers/authController.js";
import signupValidator from "../middleware/signupValidator.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/verify-email", verifyEmail);
router.post("/resend-email", resendEmail);
router.post("/reset-password", resetPassword);
router.post("/signup", signupValidator, signup);
router.post("/forgot-password", forgotPassword);

export default router;

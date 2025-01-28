import express from "express";
import {
  signup,
  login,
  verifyEmail,
  resendEmail,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";
import signupValidator from "../middleware/signupValidator.js";

const router = express.Router();

router.post("/signup", signupValidator, signup);
router.post("/login", login);
router.get("/verify-email", verifyEmail);
router.post("/resend-email", resendEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;

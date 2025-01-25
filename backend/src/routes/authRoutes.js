import express from "express";
import { signup, login } from "../controllers/authController.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  signup
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  login
);

export default router;

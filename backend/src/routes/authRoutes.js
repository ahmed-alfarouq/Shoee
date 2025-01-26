import express from "express";
import { signup, login, getUsers } from "../controllers/authController.js";
import loginValidator from "../middleware/loginValidator.js";
import signupValidator from "../middleware/signupValidator.js";

const router = express.Router();

router.get("/", getUsers)
router.post("/signup", signupValidator, signup);

router.post("/login", loginValidator, login);

export default router;

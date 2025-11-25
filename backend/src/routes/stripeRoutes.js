import { Router } from "express";

import catchAsync from "../utils/error/catchAsync.js";

import checkoutValidator from "../middleware/checkoutValidator.js";

import { createSession } from "../controllers/stripeController.js";

const router = Router();

router.post("/create-session", checkoutValidator, catchAsync(createSession));

export default router;
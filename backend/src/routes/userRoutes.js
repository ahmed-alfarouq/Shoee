import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import { upload } from "../utils/storage.js";
import {
  uploadAvatar,
  updateUsername,
  updatePassword,
  updateBillingDetails,
} from "../controllers/userController.js";
import {
  billingDetailsValidation,
  passwordValidation,
  usernameValidation,
} from "../middleware/validations.js";

const router = Router();

router.post(
  "/upload-avatar",
  authMiddleware,
  upload.single("avatar"),
  uploadAvatar
);
router.post("/username", authMiddleware, usernameValidation, updateUsername);
router.post("/password", authMiddleware, passwordValidation, updatePassword);
router.post(
  "/billing-details",
  authMiddleware,
  billingDetailsValidation,
  updateBillingDetails
);

export default router;

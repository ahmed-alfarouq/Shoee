import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import { upload } from "../utils/storage.js";
import {
  uploadAvatar,
  createAddress,
  updateAddress,
  removeAddress,
  updateUsername,
  updatePassword,
  updateDefaultAddress,
} from "../controllers/userController.js";

import {
  addressValidation,
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
  "/update-address",
  authMiddleware,
  addressValidation,
  updateAddress
);
router.post(
  "/create-address",
  authMiddleware,
  addressValidation,
  createAddress
);
router.post("/remove-address", authMiddleware, removeAddress);
router.post("/default-address", authMiddleware, updateDefaultAddress);

export default router;

import { Router } from "express";
import catchAsync from "../utils/error/catchAsync.js";

import { getProduct, getProducts } from "../controllers/productsController.js";
import { findTopRatedReviews } from "../controllers/ReviewsController.js";

const router = Router();

router.get("/", catchAsync(getProducts));
router.get("/:id", catchAsync(getProduct));
router.get("/reviews/top", catchAsync(findTopRatedReviews));

export default router;

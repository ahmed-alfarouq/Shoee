import mongoose from "mongoose";
import Product from "../models/ProductModel.js";
import AppError from "../utils/error/appError.js";

export const getProducts = async (req, res, next) => {
  const { category, rating, minPrice, maxPrice, limit = 10, cursor } = req.query;

  const filter = {};

  // Category filter
  if (category) filter.category = category;

  // Rating filter
  if (rating) filter.rating = { $gte: Number(rating) };

  // Price range filter
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }

  if (cursor && cursor !== "undefined" && cursor !== "null") {
    if (!mongoose.Types.ObjectId.isValid(cursor)) {
      return next(new AppError("Invalid cursor ID format.", 400));
    }
    filter._id = { $gt: cursor };
  }

  const numericLimit = Number(limit);

  const totalCount = await Product.countDocuments(filter);

  const products = await Product.find(filter)
    .sort({ _id: 1 })
    .limit(numericLimit);

  const nextCursor =
    products.length === numericLimit ? products[products.length - 1]._id : null;

  res.json({
    products,
    totalCount,
    nextCursor,
    count: products.length,
    hasMore: !!nextCursor,
  });
};

import mongoose, { Types } from "mongoose";
import Product from "../models/ProductModel.js";
import AppError from "../utils/error/appError.js";

export const getProducts = async (req, res, next) => {
  const { s, category, rating, minPrice, maxPrice, discountPercentage, limit = 10, cursor } = req.query;

  const filter = {};

  // Name filter
  if (s) filter.title = { $regex: s, $options: "i" };

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

  // On Sale
  if (discountPercentage) filter.discountPercentage = { $gte: Types.Decimal128.fromString(discountPercentage) };

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

export const getProduct = async (req, res, next) => {
  const { id } = req.params;

  if (!id) return next(new AppError("Id is required.", 400));

  if (!Types.ObjectId.isValid(id)) return next(new AppError("Id is invalid.", 400, "BAD_REQUEST"));

  const product = await Product.findById(id).populate("reviews");

  if (!product) return next(new AppError("Product not found.", 404));

  return res.json(product);
}
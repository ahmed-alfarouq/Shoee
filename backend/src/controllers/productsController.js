import mongoose, { Types } from "mongoose";
import Product from "../models/ProductModel.js";
import AppError from "../utils/error/appError.js";

export const getProducts = async (req, res, next) => {
  const { s, exclude, category, rating, price, discountPercentage, limit = 10, cursor } = req.query;

  const filter = {};

  // Name filter
  if (s) filter.title = { $regex: s, $options: "i" };

  // Categories filter
  if (category) {
    const categories = Array.isArray(category) ? category : [category];
    filter.category = { $in: categories };
  }

  // Rating filter
  if (rating) {
    const ratings = Array.isArray(rating) ? rating : [rating];
    const minRating = Math.min(...ratings.map(Number));

    filter.rating = { $gte: minRating }
  };

  // Price range filter
  if (price?.length) {
    filter.price = {
      $gte: Number(price[0]),
      $lte: Number(price[1]),
    };
  }

  // Exclude
  if (exclude?.length) {
    filter._id = {
      $nin: exclude,
    }
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
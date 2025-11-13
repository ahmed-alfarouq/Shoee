import Product from "../models/ProductModel.js";

export const getAllProducts = async (req, res, next) => {
  const limit = parseInt(req.query.limit) || 10;
  const cursor = req.query.cursor ? { _id: { $gt: req.query.cursor } } : {};

  const products = await Product.find(cursor).limit(limit).sort({ _id: 1 });;

  const nextCursor =
    products.length === limit ? products[products.length - 1]._id : null;

  res.json({
    products,
    nextCursor,
    hasMore: !!nextCursor,
  });
};

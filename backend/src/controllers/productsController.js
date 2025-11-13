import Product from "../models/ProductModel.js";

export const getAllProducts = async (req, res, next) => {
  const { limit, cursor } = req.query;

  const currentCursor = cursor && cursor !== "undefined" && cursor !== "null" ? { _id: { $gt: cursor } } : {};

  const products = await Product.find(currentCursor).limit(parseInt(req.query.limit) || 10).sort({ _id: 1 });;

  const nextCursor =
    products.length === limit ? products[products.length - 1]._id : null;

  res.json({
    products,
    nextCursor,
    hasMore: !!nextCursor,
  });
};

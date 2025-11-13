import Review from "../models/ReviewModel.js";

export const findTopRatedReviews = async (req, res) => {
  const limit = req.query.count || 4;
  const rating = req.query.rating || 4;

  const reviews = await Review.find({ rating: { $gt: rating } })
    .populate("user")
    .limit(limit);
  res.json({ reviews });
};

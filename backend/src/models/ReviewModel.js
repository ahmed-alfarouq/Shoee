import { model, Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true, trim: true, maxlength: 1000 },
    reviewerName: { type: String, required: true },
    reviewerEmail: { type: String, required: true },
  },
  { timestamps: true }
);

reviewSchema.index({ userId: 1, createdAt: -1 });
reviewSchema.index({ productId: 1, createdAt: -1 });

const Review = model("Review", reviewSchema);

export default Review;

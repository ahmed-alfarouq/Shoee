import { model, Schema } from "mongoose";

export const productSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    brand: { type: String, trim: true },
    category: {
      type: String,
      required: true,
      enum: ["mens-shirts", "mens-shoes", "mens-watches"],
      index: true,
    },
    tags: [{ type: String, trim: true }],
    price: {
      type: Schema.Types.Decimal128,
      required: true,
      min: 0,
    },
    discountPercentage: {
      type: Schema.Types.Decimal128,
      default: 0,
      min: 0,
      max: 100,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    weight: {
      type: Schema.Types.Decimal128,
      min: 0,
    },
    dimensions: {
      width: { type: Schema.Types.Decimal128, required: true },
      height: { type: Schema.Types.Decimal128, required: true },
      depth: { type: Schema.Types.Decimal128, required: true },
    },
    shippingInformation: {
      type: String,
      default: "Standard Shipping",
    },
    availabilityStatus: {
      type: String,
      required: true,
      enum: ["In Stock", "Limited Stock", "Out of Stock"],
      index: true,
    },
    returnPolicy: { type: String, default: "Has no return policy." },
    warrantyInformation: String,

    images: [
      {
        type: String,
      },
    ],
    thumbnail: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.index({ category: 1 });

productSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "productId",
});

const Product = model("Product", productSchema);

export default Product;

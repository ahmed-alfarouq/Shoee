import { model, Schema } from "mongoose";

export const productSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    brand: { type: String, required: true, trim: true },
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
      get: (v) => parseFloat(v), // MongoDB return { "$numberDecimal": "119.99" }, so parseFloat(v) returns only value
    },
    discountPercentage: {
      type: Schema.Types.Decimal128,
      default: 0,
      min: 0,
      max: 100,
      get: (v) => parseFloat(v),
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
      get: (v) => parseFloat(v),
    },
    dimensions: {
      width: {
        type: Schema.Types.Decimal128,
        required: true,
        get: (v) => parseFloat(v),
      },
      height: {
        type: Schema.Types.Decimal128,
        required: true,
        get: (v) => parseFloat(v),
      },
      depth: {
        type: Schema.Types.Decimal128,
        required: true,
        get: (v) => parseFloat(v),
      },
    },
    shippingInformation: {
      type: String,
      default: "Standard Shipping",
    },
    availabilityStatus: {
      type: String,
      required: true,
      enum: ["In Stock", "Low Stock", "Limited Stock", "Out of Stock"],
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
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
  }
);

productSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "product",
});

const Product = model("Product", productSchema);

export default Product;

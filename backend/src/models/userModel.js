import mongoose from "mongoose";

const billingDetailsSchema = new mongoose.Schema({
  first_name: { type: String, default: "" },
  last_name: { type: String, default: "" },
  country: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  zip_code: {
    type: String,
    match: [/^\d{5}(-\d{4})?$/, "Invalid ZIP code"],
  },
  street_name: { type: String, default: "" },
  apartment: { type: String, default: "" },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String || null,
    default: null,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "customer"],
    default: "customer",
  },
  billing_details: { type: billingDetailsSchema },
  isVerified: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

export default User;

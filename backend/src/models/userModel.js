import { model, Schema } from "mongoose";

const billingDetailsSchema = new Schema({
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
  phone_number: {
    type: String,
    match: [/^\+?[1-9]\d{1,3}(\s)?\d{1,14}$/, "Invalid Phone Number"],
    default: "",
  },
});

const userSchema = new Schema({
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
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

const User = model("User", userSchema);

export default User;

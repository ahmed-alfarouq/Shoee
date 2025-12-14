import { model, Schema } from "mongoose";

const addressSchema = new Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  country: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  zipCode: {
    type: String,
    match: [/^\d{5}(-\d{4})?$/, "Invalid ZIP code"],
  },
  streetName: { type: String, default: "" },
  apartment: { type: String, default: "" },
  phoneNumber: {
    type: String,
    match: [/^\+?[1-9]\d{1,3}(\s)?\d{1,14}$/, "Invalid Phone Number"],
    default: "",
  },
  isDefault: { type: Boolean, default: false },
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
  addresses: {
    type: [addressSchema],
    default: [],
  },
  isVerified: { type: Boolean, default: false },
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

const User = model("User", userSchema);

export default User;

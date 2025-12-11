import { body, validationResult } from "express-validator";

const usernameValidation = [
  body("newUsername")
    .trim()
    .isAlphanumeric()
    .withMessage(
      "Oops! Usernames can’t have symbols or spaces — just letters and numbers."
    )
    .escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const passwordValidation = [
  body("newPassword")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long!")
    .escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const billingDetailsValidation = [
  body("billing_details")
    .isObject({ strict: true })
    .withMessage("Billing details must be a valid object"),

  body("billing_details.first_name")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .escape(),

  body("billing_details.last_name")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .escape(),

  body("billing_details.country")
    .trim()
    .notEmpty()
    .withMessage("Country is required")
    .escape(),

  body("billing_details.city")
    .trim()
    .notEmpty()
    .withMessage("City is required")
    .escape(),

  body("billing_details.state")
    .trim()
    .notEmpty()
    .withMessage("State is required")
    .escape(),

  body("billing_details.zip_code")
    .trim()
    .matches(/^\d{5}(-\d{4})?$/)
    .withMessage("Invalid ZIP code format. Use 12345 or 12345-6789"),

  body("billing_details.street_name")
    .trim()
    .notEmpty()
    .withMessage("Street name is required")
    .escape(),

  body("billing_details.apartment").optional().trim().escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { usernameValidation, passwordValidation, billingDetailsValidation };

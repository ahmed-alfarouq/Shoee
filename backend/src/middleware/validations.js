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

const addressValidation = [
  body("id").trim().notEmpty().withMessage("ID is required").escape(),

  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .escape(),

  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .escape(),

  body("country").trim().notEmpty().withMessage("Country is required").escape(),

  body("city").trim().notEmpty().withMessage("City is required").escape(),

  body("state").trim().notEmpty().withMessage("State is required").escape(),

  body("zipCode")
    .trim()
    .matches(/^\d{5}(-\d{4})?$/)
    .withMessage("Invalid ZIP code format. Use 12345 or 12345-6789"),

  body("streetName")
    .trim()
    .notEmpty()
    .withMessage("Street name is required")
    .escape(),

  body("apartment").optional().trim().escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { usernameValidation, passwordValidation, addressValidation };

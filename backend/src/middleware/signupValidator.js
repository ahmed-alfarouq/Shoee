import { body, validationResult } from "express-validator";

const signupValidator = [
  body("email")
    .trim()
    .normalizeEmail({
      all_lowercase: true,
      gmail_remove_dots: false,
    })
    .isEmail()
    .withMessage("Please provide a valid email address!"),

  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long!")
    .escape(),

  body("username")
    .trim()
    .isAlphanumeric()
    .withMessage("Username must be Alphanumeric!")
    .escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default signupValidator;

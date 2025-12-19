import { body, validationResult } from "express-validator";

const checkoutValidator = [
    body("products")
        .isArray({ min: 1 })
        .withMessage("Products must be a non-empty array"),

    body("products.*.stripePriceId")
        .exists()
        .withMessage("stripePriceId is required for each product")
        .bail()
        .isString()
        .withMessage("stripePriceId must be a string"),

    body("products.*.qty")
        .exists()
        .withMessage("quantity is required for each product")
        .isInt({ min: 1 })
        .withMessage("quantity must be an integer >= 1"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
]

export default checkoutValidator;
import cors from "cors";
import helmet from "helmet";
import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";

import AppError from "./utils/error/appError.js";
import handleError from "./middleware/handleError.js";

const app = express();

const allowedOrigins = [
  "https://shoee.pages.dev",
  "http://localhost:3000",
  "https://shoee-rho.vercel.app",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionSuccessStatus: 200,
  exposedHeaders: ["Authorization"],
};

// Middleware
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    msg: "Ok",
  });
});

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/products", productsRoutes);

// Catch all undefined routes
app.all("*", (req, res, next) => next(new AppError(`Can't find ${req.originalUrl} on this server`, 404)))

// Error handling
app.use(handleError);

export default app;

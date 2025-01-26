import express from "express";
import helmet from "helmet";
import compression from "compression";
import authRoutes from "./routes/authRoutes.js";


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());

// Routes
app.use("/auth", authRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
  });
});
export default app;

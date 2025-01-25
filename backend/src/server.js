import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(() => console.log(`Server is running on http://localhost:${PORT}`));

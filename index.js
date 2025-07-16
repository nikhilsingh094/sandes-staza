import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import "./modal/server.js";
import messageRouter from "./routes/messageRoute.js";
import sequelize from "./config/database.js"; // Sequelize instance

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

// API Route
app.use("/api/v1/message", messageRouter);

// ✅ Sequelize connection check and sync
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected successfully");

    await sequelize.sync(); // auto-create tables if not exist
    console.log("📦 Tables synced successfully");

    // Server start after DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Unable to connect to PostgreSQL:", err);
  }
})();

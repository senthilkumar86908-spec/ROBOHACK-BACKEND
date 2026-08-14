require("dotenv").config();

const app = require("../src/app");
const connectDB = require("../src/config/database");

let dbConnected = false;

module.exports = async (req, res) => {
  try {
    if (!dbConnected) {
      await connectDB();
      dbConnected = true;
    }

    return app(req, res);
  } catch (error) {
    console.error("Database connection error:", error);

    return res.status(500).json({
      success: false,
      message: "Database connection failed"
    });
  }
};
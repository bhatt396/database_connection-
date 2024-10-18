// server.js or app.js
const express = require("express");
const connectDB = require("./db"); // Import your database connection file
require("dotenv").config();

// Initialize Express app
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json()); // for parsing application/json

// Sample Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Port Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

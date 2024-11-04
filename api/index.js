// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const otpRoutes = require("./routes/otp"); // Import OTP routes
const cors = require('cors');
const queryRoutes = require('./routes/queryRoutes');

// Import the routes
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const routingMiddleWare = (req, res, next) => {
  console.log('requested Route', req.baseUrl ? req.baseUrl + req.path : req.path);
  next();
}

// Update this line to properly handle the root route
app.get("/", routingMiddleWare, (req, res) => {
  res.json("Hello"); // Make sure to use .get instead of .length
});

// Routes
app.use('/api/queries', routingMiddleWare, queryRoutes); // Use the query routes
app.use("/api/auth", otpRoutes);

// Specify the port and start the server
const port = process.env.PORT || 5000; // Use process.env.PORT for Heroku or Vercel
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

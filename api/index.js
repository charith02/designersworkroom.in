// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const queryRoutes = require('./routes/queryRoutes');

// Import the routes
dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: ["https://designersworkroom-in-frontend.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json()); // Parse JSON request bodies

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Update this line to properly handle the root route
app.get("/", (req, res) => {
  res.json("Hello"); // Make sure to use .get instead of .length
});

// Routes
app.use('/api/queries', queryRoutes); // Use the query routes

// Specify the port and start the server
const port = process.env.PORT1 || process.env.PORT2; // Use process.env.PORT for Heroku or Vercel
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

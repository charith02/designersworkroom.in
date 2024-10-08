const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const queryRoutes = require('./routes/queryRoutes'); // Import the query routes

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: ["https://designersworkroom-in-frontend.vercel.app"], // Allow frontend domain
  methods: ["POST", "GET"], // Allow POST and GET methods
  credentials: true // Allow cookies or other credentials
}));
app.use(express.json()); // Parse incoming JSON requests

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Test route for the root URL
app.get("/", (req, res) => {
  res.json("Hello"); // Simple test route for health checks
});

// Route to handle form submission
app.post('/api/queries/submit-query', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Logic to save the query to MongoDB
  // Example: You might save to a database here
  // Assuming you have a Query model defined in your models folder
  const query = new Query({ name, email, subject, message });
  
  query.save()
    .then(() => res.status(200).json({ message: 'Query submitted successfully!' }))
    .catch((err) => {
      console.error("Error saving query:", err);
      res.status(500).json({ message: 'Error submitting the form' });
    });
});

// Routes for handling queries
app.use('/api/queries', queryRoutes); // Attach queryRoutes for '/api/queries'

// Specify the port and start the server
const port = process.env.PORT || 5000; // Use PORT from environment or default to 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

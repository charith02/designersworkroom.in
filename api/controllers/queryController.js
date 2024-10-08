// controllers/queryController.js
const query = require('../models/query');

// Function to handle query submission
exports.submitQuery = async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    try {
        console.log("Form Data:", { name, email, subject, message });
        const newQuery = new query({ name, email, subject, message });
        await newQuery.save(); 
        res.status(201).json({ message: "Query submitted successfully!" });
    } catch (error) {
        console.error("Error saving query:", error);
        res.status(500).json({ error: "Failed to submit query" });
    }
  };
  

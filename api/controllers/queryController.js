// controllers/queryController.js
const Query = require('../models/Query');

// Function to handle query submission
exports.submitQuery = async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const newQuery = new Query({
            name,
            email,
            subject,
            message
        });

        await newQuery.save(); // Save the query to MongoDB
        res.status(201).json({ message: "Query submitted successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to submit query" });
    }
};
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const queryRoutes = require('./routes/queryRoutes'); // Import the routes

dotenv.config();
const app = express();

// Middleware
app.use(cors(
    {
        origin: ["https://designersworkroom-in-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json()); // Parse JSON request bodies

// Database connection
mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/queries', queryRoutes); // Use the query routes

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

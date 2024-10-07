// routes/queryRoutes.js
const express = require('express');
const router = express.Router();
const { submitQuery } = require('../controllers/queryController');

// Route to handle query form submission
router.post('/submit-query', submitQuery);

module.exports = router;

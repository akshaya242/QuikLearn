const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Route to add all data
router.get('/', mainController.getData);

module.exports = router;

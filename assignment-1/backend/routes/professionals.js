const express = require('express');

const professionalController = require('../controllers/professionals');

const router = express.Router();

// GET /feed/posts
router.get('/', professionalController.getData);

module.exports = router;
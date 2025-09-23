// routes/professionalRoutes.js
const express = require ("express");
const router = express.Router();

const professionalController = require("../controllers/professionalController");

// GET route
router.get("/", professionalController.getProfessionals);

module.exports = router;
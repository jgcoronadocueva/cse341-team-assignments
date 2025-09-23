// controllers/professionalController.js
const Professional = require('../models/Professional');

const professionalController = {};

module.exports = professionalController;

professionalController.getProfessionals = async function (req, res) {
  try {
    // Fetch all documents
    const professionals = await Professional.find();
    res.status(200).json(professionals[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = professionalController;
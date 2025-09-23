const express = require ('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Import routes
const professionalRoutes = require("./routes/professionalRoutes");

// Use the routes
app.use("/professional", professionalRoutes);

// Connect DB and start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
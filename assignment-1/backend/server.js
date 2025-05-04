const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./database/connect');
const professionalRoutes = require('./routes/professionals');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use('/professional', professionalRoutes);


mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
const mongoose = require('mongoose');
const app = require('./app/app.js');

require('dotenv').config();

const port = process.env.PORT || 3000;

app.locals.db = mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database");

        app.listen(port, () => {
            console.log("Application listening on port " + port);
        });
    });
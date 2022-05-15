const express = require('express');
const path = require('path');
const fs = require('fs');
const eventPersonal = require('./collections/eventPersonal');
const router = express.Router();

router.get("", (req, res) => {
    fs.writeFile("./app/events/events.json", () => {
        let events = eventPersonal.find({});
    });
    res.sendFile(path.resolve("./app/events/events.json"));
});

module.exports = router;
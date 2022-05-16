const express = require('express');
const path = require('path');
const fs = require('fs');
const eventPublic = require('./collections/eventPublic');
const router = express.Router();

router.get("", (req, res) => {
    if(req.query.day != undefined) {
        let events = eventPublic.find({data: req.query.day});
        fs.writeFile("./app/events/events.json", () => {
            events.map(event => event.name); //Devo definire la funzione map?
        });
    }
    res.sendFile(path.resolve("./app/events/events.json"));
});

module.exports = router;
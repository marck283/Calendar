const express = require('express');
const eventPublic = require('../collezioni/eventPublic');
const router = express.Router();
const eventsMap = require('./eventsMap.js');

router.get("", async (req, res) => {
    var events = await eventPublic.find({});
    console.log(events);
    res.status(200).json(eventsMap.map(events, "layoutPubblico.html"));
});

module.exports = router;
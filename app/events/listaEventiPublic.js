const express = require('express');
const eventPublic = require('../collezioni/eventPublic');
const router = express.Router();
const eventsMap = require('./eventsMap.js');

router.get("", async (req, res) => {
    var events = await eventPublic.find({});

    var token = req.header("x-access-token");
    res.status(200).json(eventsMap.map(events, "layoutPubblico.html", token));
});

module.exports = router;
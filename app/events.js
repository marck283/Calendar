const express = require('express');
const eventPublic = require('./collections/eventPublic');
const router = express.Router();

router.get("", async (req, res) => {
    var events;
    if(req.query.giorno != undefined) {
        events = await eventPublic.find({data: req.query.giorno});
    } else {
        events = await eventPublic.find({});
    }
    events = events.map(event => {
        return {
            id: '/api/v1/events/' + event._id,
            name: event.nomeAtt,
            category: event.categoria
        }
    });
    res.status(200).json(events);
});

module.exports = router;
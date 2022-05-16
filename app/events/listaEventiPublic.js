const express = require('express');
const eventPublic = require('./collections/eventPublic');
const router = express.Router();

router.get("", async (req, res) => {
    var events = await eventPublic.find({});
    events = events.map(event => {
        return {
            id: '/api/v1/listaEventi/' + event._id,
            name: event.nomeAtt,
            category: event.categoria
        }
    });
    res.status(200).json(events);
});

module.exports = router;
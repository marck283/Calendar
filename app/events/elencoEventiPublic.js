const express = require('express');
const eventPublic = require('../collezioni/eventPublic');
const router = express.Router();
const eventsMap = require('./eventsMap.js');

router.get("/:data", async (req, res) => {
    var str = req.params.data.split("-").join("/"); //Il parametro "data" deve essere parte dell'URI sopra indicato se si vuole accedere a questa proprietà.
    console.log(str);
    var events = await eventPublic.find({data: str}); //Perché qui la ricerca non ritorna nulla? Chiedere un'opinione agli altri...
    console.log(events[0]);
    if(events.length > 0) {
        res.status(200).json(eventsMap.map(events, "layoutPubblico.html"));
    } else {
        res.status(404).json({"Errore": "Non esiste alcun evento legato alla risorsa richiesta."});
    }
});

module.exports = router;
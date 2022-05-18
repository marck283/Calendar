var express = require('express'), path = require('path');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("static"));

var eventList = require("./events/listaEventiPublic.js"), calendarEvents = require("./events/elencoEventiPublic.js");
app.use("/api/v1/EventiPubblici", eventList);
app.use("/api/v1/GiorniCalendarioPubblico", calendarEvents);

app.get("/static", (req, res) => {
    res.status(200).sendFile(path.resolve("./index.html"));
});

module.exports = app;
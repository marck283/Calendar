var express = require('express'), path = require('path');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("static"));

var eventList = require("./listaEventiPublic.js"), calendarEvents = require("./events/elencoEventiPublic.js");
app.use("/api/v1/listaEventi", eventList);
app.use("/api/v1/eventiCalendario", calendarEvents);

app.get("/static", (req, res) => {
    res.status(200).sendFile(path.resolve("./index.html"));
});

app.get("/styles", (req, res) => {
    res.status(200).sendFile(path.resolve("/styles/calendar.css"));
});

module.exports = app;
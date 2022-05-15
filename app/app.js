var express = require('express'), path = require('path');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("static"));

var events = require("./events.js");
app.use("/api/v1/events", events); //404 Not Found. COme mai?

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./index.html"));
});

app.get("/styles", (req, res) => {
    res.sendFile(path.resolve("/styles/calendar.css"));
});

module.exports = app;
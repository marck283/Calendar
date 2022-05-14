var express = require('express');
var app = express();

var path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/static"));

app.get("/static", (req, res) => {
    res.sendFile(path.resolve("./index.html"));
});

app.get("/styles", (req, res) => {
    res.sendFile(path.resolve("/styles/calendar.css"));
});

app.get("/events", (req, res) => {
    //Connect to database, take out event info and write the file "events.json".
    //In this example, we are first going to provide only the already written file.
    res.sendFile(path.resolve("events.json"));
});

var port = 3000;

app.listen(port, () => {
    console.log("Server running on port " + port);
});

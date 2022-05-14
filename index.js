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
})

var port = 3000;

app.listen(port, () => {
    console.log("Server running on port " + port);
});

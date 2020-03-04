

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

app.get("/api/test", function(req, res) {
    console.log("funziona");
});

app.get("/", function(req, res) {
    console.log("home");
    res.sendFile('src/index.html');
});
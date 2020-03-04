

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

//middleware che renderizza la view giusta
function sendViewMiddleware(req, res, next) {
    res.sendView = function(view) {
        return res.sendFile(__dirname + "/views/" + view);
    }
    next();
}
app.use(sendViewMiddleware);


app.get("/api/test", function(req, res) {
    console.log("funziona");
});

app.get("/", function(req, res, next) {
    console.log("home");
    res.sendView('index.html');
});
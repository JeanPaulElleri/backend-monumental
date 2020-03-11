

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

    // parse application/json
    app.use(bodyParser.json());
    //parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
    const Sequelize = require('sequelize');
    // initialize an instance of Sequelize
    const sequelize = new Sequelize({
      database: 'users_db',
      username: 'root',
      password: '',
      dialect: 'mysql',
    });
    // check the databse connection
    sequelize
      .authenticate()
      .then(() => console.log('Connection has been established successfully.'))
      .catch(err => console.error('Unable to connect to the database:', err));
});

app.get("/", function(req, res, next) {
    console.log("home");
    res.sendView('index.html');
});
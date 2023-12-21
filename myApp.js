const express = require('express');
const app = express();
var bodyParser = require('body-parser');


// Serve static files from the 'public' directory
app.use(express.static(__dirname + "/public"));

app.use("/public", express.static(__dirname + "/public"));

// Send the HTML file for the root path ('/')
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/name", (req, res) => {
  var { first: firstName, last: lastName } = req.body;
  //Use template literals to form a formatted string
  res.json({
  name: `${firstName} ${lastName}`
  });
});

//app.get("/name", (req, res) => {
  //var { first: firstName, last: lastName } = req.body;
  //Use template literals to form a formatted string
  //res.json({
  //name: `${firstName} ${lastName}`
  //});
//});

//app.get('/:word/echo', (req, res) => {
  //const {word} = req.params;
  //res.json({echo: word});
//});

//app.get('/now', (req, res, next) => {
  //req.time = new Date().toString();
  //next();
//}, function(req, res) {
//  res.json({time: req.time});
//});

//app.use(function middleware(req, res, next) {
// let string = req.method + " " + req.path + " - " + req.ip;
 // console.log(string)
 // next()
//});
// Define a route for the '/json' path

//var message = "Hello json";

//app.get('/json', (req, res) => {
 // if (process.env.MESSAGE_STYLE === 'uppercase') {
 // res.json({ "message": message.toUpperCase() });
  //} else {
  //  res.json({ "message": message });
    //};
//});





































 module.exports = app;

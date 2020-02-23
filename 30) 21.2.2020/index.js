//load "express" module
var express = require("express");

//create server
var app = express();

//start listener
app.listen(6070); //1024 to 65535
console.log("Server started at port 6070");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get("/home", function(req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get("/courses", function(req, res) {
  res.sendFile(__dirname + "/courses.html");
});

app.get("/contact", function(req, res) {
  res.sendFile(__dirname + "/contact.html");
});


//import modules
var express = require("express");
var bodyparser = require("body-parser");

//create server
var app = express();

//start server
app.listen(6070);
console.log("Server started");

//enable static files
app.use(express.static(__dirname));

//enable body parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


//import modules
var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");

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

//create schema
var UsersSchema= new mongoose.Schema( { userid: Number, username: String, password: String }, { versionKey: false } );

//create model
var UsersModel = mongoose.model("users", UsersSchema);

//serve index.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//accept post request for "/login"
app.post("/login", function(req, res) {
  mongoose.connect("mongodb://localhost/company", { useNewUrlParser: true,useUnifiedTopology: true });

  //find (retrieve data) from database
  UsersModel.find({ username: req.body.username, password: req.body.password }, function(err, data) {
    if (err == null)
    {
      //success (data loaded from db)
      console.log(data);
      res.send(data);
    }
    else
    {
      //failure (data not loaded)
      console.log(err);
      res.send("Error");
    }
    mongoose.connection.close();  
  });
});

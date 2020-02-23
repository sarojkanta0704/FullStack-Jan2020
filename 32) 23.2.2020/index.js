//load modules
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");

//create server
var app = express();

//create schema
var CourseSchema= new mongoose.Schema( { courseno: Number, coursename: String, duration: String } );

//create model
var CourseModel = mongoose.model("courses", CourseSchema);

//Set the "handlebars" as view engine
app.engine("hbs", expressHandlebars());
app.set("view engine", "hbs");

//start listener (server)
app.listen(6070); //1024 to 65535
console.log("Server started at port 6070");

app.get("/home", function(req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get("/courses", function(req, res) {
  //connect to db
  mongoose.connect("mongodb://localhost/nareshit");

  //find (retrieve data) from database
  CourseModel.find(function(err, data) {
    if (err == null)
    {
      //success (data loaded from db)
      console.log(data);
      res.render("courses.hbs", { courses: data, layout: false } );
      //res.send(data);
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

app.get("/contact", function(req, res) {
  res.sendFile(__dirname + "/contact.html");
});


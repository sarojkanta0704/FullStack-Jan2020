//load modules
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyparser = require("body-parser");

//create server
var app = express();

//create schema
var CourseSchema= new mongoose.Schema( { courseno: Number, coursename: String, duration: String }, { versionKey: false } );

//create model
var CourseModel = mongoose.model("courses", CourseSchema);

//Set the "handlebars" as view engine
app.engine("hbs", expressHandlebars());
app.set("view engine", "hbs");

//enable body parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//start listener (server)
app.listen(6070); //1024 to 65535
console.log("Server started at port 6070");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get("/home", function(req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get("/courses", function(req, res) {
  //connect to db
  mongoose.connect("mongodb://localhost/nareshit", { useNewUrlParser: true,useUnifiedTopology: true });

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


//Code inserting new course [Executes when the user clicks on 'New Course' hyperlilnk]
app.get("/new-course", function(req, res) {
  res.render("new-course.hbs", { layout: false });
});

//Executes when the user clicks on 'Save' button 'New Course' page
app.post("/insert-course", function(req, res) {
  //connect to db
  mongoose.connect("mongodb://localhost/nareshit", { useNewUrlParser: true, useUnifiedTopology: true });

  var newCourse = new CourseModel({
    courseno: req.body.courseno,
    coursename: req.body.coursename,
    duration: req.body.duration });
  
  newCourse.save(function(err)
  {
    if (err == null)
    {
      //successfully inserted
      res.redirect("/courses");
    }
    else
    {
      //inserting failed
      res.send("Failed");
    }

    mongoose.connection.close();
  });
});


//Update course
app.get("/edit-course", function(req, res) {
  //fetch course data from databse
  var cno = req.query.courseno;

  mongoose.connect("mongodb://localhost/nareshit", { useNewUrlParser: true, useUnifiedTopology: true });

  CourseModel.findOne({ courseno: cno }, function(err, data) {
    if (err == null)
    {
      console.log(data);
      res.render("edit-course.hbs", { course: data, courseNotFound: data == null, layout: false });
    }
    else
    {
      console.log(err);
      res.send("Error");
    }
    mongoose.connection.close();
  });
});


//Update-course
app.post("/update-course", function(req, res) {
  mongoose.connect("mongodb://localhost/nareshit", { useNewUrlParser: true, useUnifiedTopology: true });

  var cno = req.body.courseno;

  CourseModel.findOne({ courseno: cno}, function(err, data) {
    if (err == null)
    {
      //Course data is retrieved from database. Now we have to update
      data.coursename = req.body.coursename;
      data.duration = req.body.duration;

      data.save(function(err) {
        if (err == null)
        {
          res.redirect("/courses");
        }
        else
        {
          console.log(err);
          res.send("Failed");
        }

        mongoose.connection.close();
      });
    }
    else
    {
      console.log(err);
      res.send("Failed to fetch data from database");
      mongoose.connection.close();
    }
  });

});



//Delete course
app.get("/delete-course", function(req, res) {
  var cno = req.query.courseno;

  mongoose.connect("mongodb://localhost/nareshit", { useNewUrlParser: true, useUnifiedTopology: true });

  CourseModel.findOne({ courseno: cno}, function(err, data) {
    if (err == null)
    {
      res.render("delete-course.hbs", { course: data, courseNotFound: data == null, layout: false });
    }
    else
    {
      console.log(err);
      res.send("Error");
    }
    mongoose.connection.close();
  });
});


app.post("/delete-course", function(req, res) {
  mongoose.connect("mongodb://localhost/nareshit", { useNewUrlParser: true, useUnifiedTopology: true });

  CourseModel.remove({ courseno: req.body.courseno }, function(err) {
    if (err == null)
    {
      res.redirect("/courses");
    }
    else
    {
      console.log(err);
      res.send("Failed to delete");
    }
    mongoose.connection.close();
  })
});



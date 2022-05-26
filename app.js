// JShint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const alumniObject = require(__dirname + "/views/alumniContent.js");


app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static("public"));
app.set('view engine', 'ejs');

var alumni = [{
    fname: "Ali",
    lname: "Elbekov",
    mail: "eldorbek2001@email.arizona.edu",
    photoPath: "/images/Ali.jpg"
  },
  {
    fname: "Rustam",
    lname: "Sobitxanov",
    mail: "sobitxanovr@email.arizona.edu",
    photoPath: "/images/Rustam.jpg"
  },
   {
    fname: "Otabek",
    lname: "Abduraimov",
    mail: "AbduraimovO@email.arizona.edu",
    photoPath:"/images/Otabek.jpg"
  },
   {
    fname: "Saidbek",
    lname: "Qodirjanov",
    mail: "QodirjanovS@email.arizona.edu",
    photoPath: "/images/Saidbek.jpg"
  },
   {
    fname: "Khan",
    lname: "Sobirjonov",
    mail: "SobirjonovKhan@gmail.com",
    photoPath: "/images/Khan.jpg"
  }
];


var alumniHtml = alumniObject.getContentHtml(alumni);
app.get("/", function(req, res) {
  res.render('list', {
    content: 'Main content',
  });
});

app.get("/Newsletter", function(req, res) {
  res.render('list', {
    content: 'News letter content'
  });
})

app.get("/Events", function(req, res) {
  res.render('list', {
    content: 'Events content'
  });
})
app.get("/Alumnii", function(req, res) {

  res.render('list', {
    content: alumniHtml
  });
})
app.get("/About", function(req, res) {
  res.render('list', {
    content: 'Main content'
  });
})


app.listen(process.env.PORT || 3000, function() {})

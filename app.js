// JShint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const alumniObject = require(__dirname + "/views/alumniContent.js");
const newsletterObject = require(__dirname + "/views/newsletterContent.js");


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
  }];

var newsletters = [{
    author: "Ali Elbekov",
     title: "Why thank you!",
      date: "Jan 12, 2022",
   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
     Massa tincidunt dui ut ornare lectus sit. Massa tincidunt nunc pulvinar\
      sapien. Scelerisque fermentum dui faucibus in ornare quam viverra. Praesent\
       elementum facilisis leo vel fringilla est u"
},
{
    author: "Ali Elbekov",
     title: "Why thank you!",
      date: "Jan 12, 2022",
   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
     Massa tincidunt dui ut ornare lectus sit. Massa tincidunt nunc pulvinar\
      sapien. Scelerisque fermentum dui faucibus in ornare quam viverra. Praesent\
       elementum facilisis leo vel fringilla est u"
},
{
    author: "Ali Elbekov",
     title: "Why thank you!",
      date: "Jan 12, 2022",
   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
     Massa tincidunt dui ut ornare lectus sit. Massa tincidunt nunc pulvinar\
      sapien. Scelerisque fermentum dui faucibus in ornare quam viverra. Praesent\
       elementum facilisis leo vel fringilla est u"
},]

var alumniHtml = alumniObject.getContentHtml(alumni);
var newslettersHtml = newsletterObject.getContentHtml(newsletters);
app.get("/", function(req, res) {
  res.render('list', {
    content: 'Main content',
  });
});

app.get("/Newsletter", function(req, res) {
  res.render('list', {
    content: newslettersHtml
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

// JShint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const alumniObject = require(__dirname + "/views/alumniContent.js");
const newsletterObject = require(__dirname + "/views/newsletterContent.js");
mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

var newsSchema = {
author: String,
titlle: String,
date: String,
content: String
}
var alumniSchema = {
fname: String,
lname: String,
mail: String,
photoPath: String
}

const News = mongoose.model("news", newsSchema);
const Alumni = mongoose.model("users", alumniSchema);
var alumniObj = Alumni.find(function(err, callback){if(err){console.log(err)}});
var newsObj = News.find(function(err, callback){if(err){console.log(err)}});
var alumniHtml = alumniObject.getContentHtml(alumniObj);
var newslettersHtml = newsletterObject.getContentHtml(newsObj);


app.get("/", function(req, res) {
  res.render('list', {content: 'Main content'});
});

app.get("/Newsletter", function(req, res) {
  res.render('list', {
    content: newslettersHtml
  });
})

app.get("/Newsletter/add", function(req, res) {
  res.render('addNewsletter', {});
})

app.post("/", function(req, res) {
  var newsletterAuthor = req.body['newsletter-author']
  var newsletterTitle = req.body['newsletter-title']
  var newsletterContent = req.body['newsletter-content']

  newsletters.unshift({author: newsletterAuthor,
                       title: newsletterTitle,
                       date: "Date here",
                       content: newsletterContent});
  // Need to think about the below line
  newslettersHtml  =  newsletterObject.getContentHtml(newsletters);
  res.redirect("/Newsletter");
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

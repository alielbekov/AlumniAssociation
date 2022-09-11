// JShint esversion: 6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
const app = express();
const mongoose = require("mongoose");
const alumniObject = require(__dirname + "/views/alumniContent.js");
const newsletterObject = require(__dirname + "/views/newsletterContent.js");
mongoose.connect("mongodb+srv://"+process.env.API_USERNAME+":"+process.env.API_KEY+"@cluster0.mjlk1.mongodb.net/?retryWrites=true&w=majority/testDB/test", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');



var newsSchema = {
author: String,
title: String,
date: Object,
content: String,
source: String,
}

var alumniSchema = {
fname: String,
lname: String,
mail: String,
photoPath: String,
role: String
}
var authSchema = {
  email: String,
  pwd: String
}
const User = mongoose.model("auth", authSchema);
const News = mongoose.model("news", newsSchema);
const Alumni = mongoose.model("users", alumniSchema);


app.get("/", function(req, res) {
  res.render('list', {content: 'home', htmls:""});
});

app.get("/news", function(req, res) {
  var newsObj = News.find({}).sort([['date', -1]]).exec(function(err, callback){
    if(err){ res.render('list', {content: err});
    }else{
      const newslettersHtml = newsletterObject.getContentHtml(callback);
      //fix data
      res.render('list', {content: "news", htmls: newslettersHtml});
    }});

})


app.post("/news", function(req, res) {

  const time = new Date();
  var newsletterAuthor = req.body['newsletter-author'];
  var newsletterTitle = req.body['newsletter-title'];
  var newsletterContent = req.body['newsletter-content'];

  const news = new News({
    author: newsletterAuthor,
    title: newsletterTitle,
    date: time,
    content: newsletterContent
  });
  news.save();
  res.redirect("/news");
})

app.get("/alumnii", function(req, res) {
  var alumniObj = Alumni.find(function(err, callback){
    if(err){res.render('list', {content: err});
    }else{
      const alumniHtml = alumniObject.getContentHtml(callback);
      //fix data !!!
      res.render('list', {content:"alumni", htmls:alumniHtml});
    }});
})

app.get("/login", function(req, res) {
  res.render('list', {content: 'login',
htmls:"a"});
});

app.get("/register", function(req, res) {
  res.render('list', {content: 'register',
htmls:"a"});
});

app.get("/faqs", function(req, res) {
  res.render('list', {content: 'faqs',
htmls:"a"});
})

app.get("/events", function(req, res) {
  res.render('list', {content: 'events',
htmls:"a"});
})



app.listen(process.env.PORT || 3000, function() {})

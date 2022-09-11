// JShint esversion: 6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
const app = express();
const mongoose = require("mongoose");
const alumniObject = require(__dirname + "/views/alumniContent.js");
const newsletterObject = require(__dirname + "/views/newsletterContent.js");
mongoose.connect("mongodb+srv://"+process.env.API_USERNAME+":"+process.env.API_KEY+"@cluster0.mjlk1.mongodb.net/?retryWrites=true&w=majority/testDB/test", { useNewUrlParser: true, useUnifiedTopology: true, writeConcern: { w: 'majority', j: true, wtimeout: 1000 }})
const newsSchema = new mongoose.Schema({
author: String,
title: String,
date: Object,
content: String,
source: String,
});

const alumniSchema = new mongoose.Schema({
fname: String,
lname: String,
mail: String,
photoPath: String,
role: String
});

const authSchema = new mongoose.Schema({
  email: String,
  pwd: String
});


const User = mongoose.model("auth", authSchema);
const News = mongoose.model("news", newsSchema);
const Alumni = mongoose.model("users", alumniSchema);





app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const {Telegraf} = require("telegraf");
const bot = new Telegraf(process.env.BOT_API);
var title = false;
var content = false;

var heading = ""
var message = ""
var author = ""

bot.command("post", (ctx)=>{
  title = true;
  ctx.reply("Enter title:")
  author = ctx.message.from.first_name;
})
bot.command("clear", (ctx)=>{
  title = false;
  content = false;
  heading = ""
  message = ""
  author = ""
})

bot.on("message", (ctx)=>{
  if(title){
    heading = ctx.message.text;
    ctx.reply("Your title is '"+ heading + "'.")
    ctx.reply("Send your content  ")
    title = false
    content = true;
  }
  else if(content){
    message = ctx.message.text;
    ctx.reply("Your content is '"+ message + "'.")
    content = false;
    ctx.reply("Your post should be up very soon!");
    addData(author, heading, message);
  }
})
bot.launch();

function addData(author, heading, message){
  const time = new Date();
  var newsletterAuthor = author;
  var newsletterTitle = heading;
  var newsletterContent = message;
  const news = new News({
      author: newsletterAuthor,
      title: newsletterTitle,
      date: time,
      content: newsletterContent,
      source: "Telegram"
    });
  news.save();
  title = false;
  content = false;
  heading = ""
  message = ""
  author = ""
}

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
htmls:""});
});

app.get("/register", function(req, res) {
  res.render('list', {content: 'register',
htmls:""});
});

app.get("/faqs", function(req, res) {
  res.render('list', {content: 'faqs',
htmls:""});
})

app.get("/events", function(req, res) {
  res.render('list', {content: 'events',
htmls:""});
})
app.get("/addNews", function(req, res) {
  res.render('list', {content: 'addNewsLetter',
htmls:""})})


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



app.listen(process.env.PORT || 3000, function() {})

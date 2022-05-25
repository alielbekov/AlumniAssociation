// JShint esversion: 6

express = require("express");
bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"));
app.set('view engine', 'ejs');



app.get("/", function(req, res){
  res.render('list', {content: 'Main content'});
});

app.get("/Newsletter", function(req, res){
  res.render('list', {content: 'News letter content'});
})

app.get("/Events", function(req, res){
  res.render('list', {content: 'Events content'});
})
app.get("/Alumnii", function(req, res){
  res.render('list', {content: 'Alumnii content'});
})
app.get("/About", function(req, res){
  res.render('list', {content: 'Main content'});
})


app.listen(3000, function(){
})

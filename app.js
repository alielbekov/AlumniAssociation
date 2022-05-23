// JShint esversion: 6

express = require("express");
bodyParser = require("body-parser");
app = express();




app.get("/", function(req, res){
  res.send("Its working");
})

app.listen(3000, function(){
  console.log("Hello world")
})

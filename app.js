// JShint esversion: 6

express = require("express");
bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"));




app.get("/", function(req, res){

  res.sendFile(__dirname + "/index.html");

})



app.listen(3000, function(){
})

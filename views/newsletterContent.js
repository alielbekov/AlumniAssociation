//jshint esversion: 6
module.exports.getContentHtml  = function(newsletters){
  var retString = '';
  for(var i =0; i<newsletters.length; i++){
    retString +='<div class="container">';
    retString +='<div class="row justify-content-center">';
    retString +='<div class="col-4 news-letter-title">';
    retString +='<h1>'+newsletters[i].title+'</h1></div></div>';
    retString += '<div class="row">';
    retString += '<div class="col-12 newsletter-content">';
    retString +=  newsletters[i].content + "</div></div>";
    retString += '<div class="row">';
    retString += '<div class="col-12 newsletter-info">';
    retString +=  newsletters[i].author + " , " + newsletters[i].date;
    retString += "</div></div></div>";
  };
    return retString;
};

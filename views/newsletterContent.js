//jshint esversion: 6
module.exports.getContentHtml  = function(newsletters){
  var retString = '';
  for(var i =0; i<newsletters.length; i++){
    var timeArray = newsletters[i].date.toString().split(" ");
    var timeStr = timeArray[2]+"."+pad(newsletters[i].date.getMonth(), 2)+"."+timeArray[3];
    retString +='<div class="container">';
    retString +='<div class="row justify-content-center">';
    retString +='<div class="news-letter-title">';
    retString +='<h1>' + newsletters[i].title + '</h1></div></div>';
    retString += '<div class="row">';
    retString += '<div class="col-12 newsletter-content">';
    retString +=  newsletters[i].content + "</div></div>";
    retString += '<div class="row">';
    retString += '<div class="col-6 newsletter-info-source">';
    retString +=  "source</div>";
    retString += '<div class="col-6 newsletter-info">';
    retString +=  newsletters[i].author + ", " + timeStr;
    retString += "</div></div></div>";
  };
    return retString;
};



function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

//jshint esversion: 6
module.exports.getContentHtml  = function(alumni){
  var retString = '<div class = "alumni">';
  for(var i =0; i<alumni.length; i++){
    retString +='<div class="card col-3">';
    retString +='<img src="'+ alumni[i].photoPath+'" class="card-img-top" alt="'+alumni[i].fname +'.jpg" height ="300px" width="100px">';
    retString += '<div class="card-body">';
    retString += '<h5 class="card-title">'+ alumni[i].fname +" "+ alumni[i].lname+ '</h5>';
    retString +=  '<p class="card-text">Email: '+ '<a href="mailto:'+alumni[i].mail+'"</a>'+alumni[i].mail +'</p>'
    retString += '<a href="#" class="btn btn-primary">Personal Link maybe like telegram</a></div></div>'
  }
  retString += "</div>";


  return retString;
};

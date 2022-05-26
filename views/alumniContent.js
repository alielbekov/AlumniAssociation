//jshint esversion: 6
module.exports.getContentHtml  = function(alumni){
  var retString = '';
  for(var i =0; i<alumni.length; i++){
    retString +='<div class="container alumnus">';
    retString +='<div class="row">';
    retString +='<div class="col-4 profile">';
    retString +='<img class=  "profile-pic" src="'+ alumni[i].photoPath+'" alt="'+alumni[i].fname +'.jpg">';
    retString += '<div class="">';
    retString += '<p class=  "profile-contact">'+alumni[i].fname+" "+alumni[i].lname+'</p>';
    retString += '<p class=  "profile-contact">'+alumni[i].mail + '</p></div></div>';
    retString += '<div class="col profile">';
    retString += 'AlumniInformation here(self written maybe):<br>';
    retString += 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit. Massa tincidunt nunc pulvinar sapien. Scelerisque fermentum dui faucibus in ornare quam viverra. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Quam viverra orci sagittis eu. Et odio pellentesque diam volutpat commodo sed egestas egestas. Eu turpis egestas pretium aenean pharetra magna. Odio euismod lacinia at quis risus sed vulputate. Nunc consequat interdum varius sit. Faucibus a pellentesque sit amet porttitor eget dolor. Leo a diam sollicitudin tempor id. Diam phasellus vestibulum lorem sed. Egestas dui id ornare arcu odio ut. Ac felis donec et odio. Malesuada fames ac turpis egestas.';
    retString += '</div></div></div>';
  };
  return retString;
};

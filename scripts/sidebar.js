var SIDEBAR_ON;
$(document).ready(function(){
  SIDEBAR_ON = false;
  $("nav").css({
      "box-shadow":"none"});
});
function toggleSideBar(){
  if (SIDEBAR_ON){
    $("#sidebarButton").css({
      "color": "#ed652d", 
      "background-color":"white",
      "box-shadow":"-5px 5px 5px #aaa"});
    $("nav").css({right:"-197px","box-shadow": "none"});
  }
  else{//SIDEBAR NOT ON
    $("#sidebarButton").css({
      "color": "#fff", 
      "background-color":"transparent",
      "box-shadow":"none"});
    $("nav").css({"right":"0px","box-shadow": "-3px 3px 3px #aaa"})
  }
  SIDEBAR_ON = !SIDEBAR_ON;
}
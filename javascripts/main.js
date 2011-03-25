$(document).ready(function() {
  $("#content").show();
  showMe('about');

  $("#navigation ul li").click(function(event) {
      sectionName = $(this).attr('id');
      showMe(sectionName);
    })
});

function showMe(section) {
  $("#navigation ul li a").removeClass("selected");
  $("#navigation ul li#" + section + " a").addClass("selected");
  $("#content>div").hide();
  $("#content #" + section).show();
  if(section == "about") {
    $("#content").addClass("about");
  } else {
    $("#content").removeClass("about");
  } 
}

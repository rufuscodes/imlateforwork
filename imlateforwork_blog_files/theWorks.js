//shows slider and hides blog buy default/ used for front page
$(document).ready(function(){ 
$("html").hide();
$("html").delay(100).fadeIn('slow');
$("#post, #postSidebar").addClass('seeNo');
});
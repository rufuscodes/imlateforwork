var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


   // we will add our javascript code here           

$(document).ready(function(){
$("#ajax-contact-form").submit(function(){

// 'this' refers to the current submitted form
var str = $(this).serialize();

   $.ajax({
   type: "POST",
   url: "contactPhp.php",
   data: str,
   success: function(msg){

$("#note").ajaxComplete(function(event, request, settings){

if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
{
result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
$("#fields").hide();
}
else
{
result = msg;
}

$(this).html(result);

});

}

 });

return false;

});

});


}
/*
     FILE ARCHIVED ON 10:53:28 Jan 31, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:24:47 Oct 26, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 69.449
  exclusion.robots: 0.107
  exclusion.robots.policy: 0.095
  cdx.remote: 0.101
  esindex: 0.015
  LoadShardBlock: 41.583 (3)
  PetaboxLoader3.datanode: 63.299 (4)
  load_resource: 82.505
  PetaboxLoader3.resolve: 43.593
*/
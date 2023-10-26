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

$(document).ready(function () {
	   $("ul.work a").click(function (e) {
		e.preventDefault();
    });
	$("#sideLeft, #headNavigation li, #home, #homeStageD").addClass('hide');
    // dim sideLeft when hovering over navigation
    $("#headNavigation").hover(function () {
        $("#sideLeft").fadeTo('fast', 0.5);
    }, function () {
        $("#sideLeft").fadeTo('fast', 1);
    });

    $("#headNavigation").hover(function () {
        $(this).fadeTo('slow', 1);
    }, function () {
        $(this).delay(3000).fadeTo('slow', 0.5);
    });

    $("#sideLeft").hover(function () {
        $(this).fadeTo('fast', 1);
    }, function () {
        $(this).fadeTo('fast', 0.5);
    });

    $("#goodBar").hover(function () {
        $("ul#goodBar li.ls3").hover(function () {
            $(this).fadeIn('slow',1);
			$(this).siblings().fadeOut('slow',0.5);
        }, function () {
			$(this).fadeOut('fast', 0.5);
          	$(this).siblings().fadeIn('fast',1);
        });}, function(){
		
    });

    
    // intro fade in at first load
    $("#home").delay(2000).fadeTo('slow', 1).ready(function () {
        $("#homeStageD").delay(3000).fadeTo('slow', 1);
    });
    $("#headNavigation li").delay(3500).ready(function () {
        $("#headNavigation li").fadeTo('slow', 1);
        $("#sideLeft").delay(4000).fadeTo('slow', 1);
    });
    //prevent work menu lauching links

			
   $("ul.work a").click(function () {
        $("ul.work a").removeClass('selected');
    });
	
	  
	
    // hide contactInfo
    $('#contactInfo').hide();
	
	$('a[title="work"]').hide();
	
    $('a[title="This thing is operational"]').click(function () {
        $('#workCase').load('https://web.archive.org/web/20110131105321/http://imlateforwork.com/wp-content/themes/imlateforworkV1_0/thisThingIsOperational.php', function () {
            $('#workCase').hide();
            $('#workCase').fadeIn('slow');
        });
        $(this).addClass('selected');
    });

    
    //add class to work menu links
    $("ul.work div.lpbcArchive ul li ul a").addClass('workBtn');
    $("ul#headNavigation").jFlow({
        slides: "#slides",
        controller: ".controlBtn",
        // must be class, use . sign
        slideWrapper: "#jFlowSlide",
        // must be id, use # sign
        selectedWrapper: "selected",
        // just pure text, no sign
        auto: true,
        //auto change slide, default true
        width: "740px",
        height: "480px",
        duration: 300,
    });

    $("#nHome, #nWork, #nContact").click(function () {
        $("#post, #postSidebar").fadeOut();
        $(".jflow-content-slider").removeClass('seeNo');
        $(".jflow-content-slider").fadeIn();

    });
    $('#sectionHeader').html('<h1>Welcome <span class="tz18">home</span></h1>');
    $('#sectionDescription').fadeIn().html('<p class="tz12e"><span class="ts1 tz126">We</span> are an independently owned design studio based in San Francisco. we are dedicated to delivering engaging and progressive websites.</p>');

    $("#nWork").click(function () {
        $('#sectionHeader').html('<h1>Web <span class="tz18">portfolio</span></h1>');
        $('#sectionDescription').fadeIn().html('<p class="tz15">We want to use your ideas and our imaginations to build a personal image that will inspire.</p>');
    });


    $("#nContact").click(function () {
        $('#sectionHeader').html('<h1>Contact <span class="tz18">us</span></h1>');
        $('#sectionDescription').fadeIn().html('<p class="tz15">We would love to here from you, please don&rsquo;t hesitate to shoot us an email.</p>');
        $('#contactInfo').fadeIn();
        $("#nHome, #nWork, #nBlog").click(function () {
            $('#contactInfo').fadeOut('slow');
        });
    });


    $("#nBlog").click(function () {
        $('#sectionHeader').html('<h1>Good <span class="tz18">ideas</span></h1>');
        $('#sectionDescription').fadeIn().html('<p class="tz15">Life without blogging is a death in disguise, without it you would be suppressing your mind.</p>');
    });

    $("#nHome").click(function () {
        $('#sectionHeader').html('<h1>Welcome <span class="tz18">home</span></h1>');
        $('#sectionDescription').fadeIn().html('<p class="tz12e"><span class="ts1 tz126">We</span> are an independently owned design studio based in San Francisco. we are dedicated to delivering engaging and progressive websites.</p>');
    });


});

/* Copyright (c) 2008 Kean Loong Tan http://www.gimiti.com/kltan
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * jFlow
 * Version: 1.2 (July 7, 2008)
 * Requires: jQuery 1.2+
 */

(function ($) {

    $.fn.jFlow = function (options) {
        var opts = $.extend({}, $.fn.jFlow.defaults, options);
        var randNum = Math.floor(Math.random() * 11);
        var jFC = opts.controller;
        var jFS = opts.slideWrapper;
        var jSel = opts.selectedWrapper;

        var cur = 0;
        var maxi = $(jFC).length;
        // sliding function
        var slide = function (dur, i) {
            $(opts.slides).children().css({
                overflow: "hidden"
            });
            $(opts.slides + " iframe").hide().addClass("temp_hide");
            $(opts.slides).animate({
                marginLeft: "-" + (i * $(opts.slides).find(":first-child").width() + "px")
            }, opts.duration * (dur), opts.easing, function () {
                $(opts.slides).children().css({
                    overflow: "auto"
                });
                $(".temp_hide").show();
            });

        }
        $(this).find(jFC).each(function (i) {
            $(this).click(function () {
                if ($(opts.slides).is(":not(:animated)")) {
                    $(jFC).removeClass(jSel);
                    $(this).addClass(jSel);
                    var dur = Math.abs(cur - i);
                    slide(dur, i);
                    cur = i;
                }
            });
        });

        $(opts.slides).before('<div id="' + jFS.substring(1, jFS.length) + '"></div>').appendTo(jFS);

        $(opts.slides).find("div").each(function () {
            $(this).before('<div class="slideContainer"></div>').appendTo($(this).prev());
        });

        //initialize the controller
        $(jFC).eq(cur).addClass(jSel);

        var resize = function (x) {
            $(jFS).css({
                position: "relative",
                width: opts.width,
                height: opts.height,
                overflow: "hidden"
            });
            //opts.slides or #mySlides container
            $(opts.slides).css({
                position: "relative",
                width: $(jFS).width() * $(jFC).length + "px",
                height: $(jFS).height() + "px",
                overflow: "hidden"
            });
            // jFlowSlideContainer
            $(opts.slides).children().css({
                position: "relative",
                width: $(jFS).width() + "px",
                height: $(jFS).height() + "px",
                "float": "left",
                overflow: "auto"
            });

            $(opts.slides).css({
                marginLeft: "-" + (cur * $(opts.slides).find(":eq(0)").width() + "px")
            });
        }

        // sets initial size
        resize();

        // resets size
        $(window).resize(function () {
            resize();
        });

        $(opts.prev).click(function () {
            if ($(opts.slides).is(":not(:animated)")) {
                var dur = 1;
                if (cur > 0) cur--;
                else {
                    cur = maxi - 1;
                    dur = cur;
                }
                $(jFC).removeClass(jSel);
                slide(dur, cur);
                $(jFC).eq(cur).addClass(jSel);
            }
        });

        $(opts.next).click(function () {
            if ($(opts.slides).is(":not(:animated)")) {
                var dur = 1;
                if (cur < maxi - 1) cur++;
                else {
                    cur = 0;
                    dur = maxi - 1;
                }
                $(jFC).removeClass(jSel);
                slide(dur, cur);
                $(jFC).eq(cur).addClass(jSel);
            }
        });
    };

    $.fn.jFlow.defaults = {
        controller: ".jFlowControl",
        // must be class, use . sign
        slideWrapper: "#jFlowSlide",
        // must be id, use # sign
        selectedWrapper: "jFlowSelected",
        // just pure text, no sign
        easing: "swing",
        duration: 400,
        width: "100%",
        prev: ".jFlowPrev",
        // must be class, use . sign
        next: ".jFlowNext" // must be class, use . sign
    };

})(jQuery);

}
/*
     FILE ARCHIVED ON 10:53:21 Jan 31, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:17:48 Oct 26, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 293.637
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.06
  cdx.remote: 0.055
  esindex: 0.009
  LoadShardBlock: 268.508 (3)
  PetaboxLoader3.datanode: 277.854 (4)
  load_resource: 147.025
  PetaboxLoader3.resolve: 37.492
*/
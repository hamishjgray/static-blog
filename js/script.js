(function ($, root, undefined) {$(function () {'use strict'; // on ready start
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
//        general
///////////////////////////////////////

  // css tricks snippet - http://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });

  // inserts current year
  $('.js-year').html(new Date().getFullYear());

  // detects touch device
  if ("ontouchstart" in document.documentElement){
    $('html').addClass('touch');
  }


///////////////////////////////////////
//      SVG image swap
///////////////////////////////////////

// finds image with class and swaps .png with .svg in img source string
if (Modernizr.svgasimg) {
  var svgSwap = $('img.js-svg-swap');
  svgSwap.each( function() {
    var currentSrc = $(this).attr('src'),
        newSrc = currentSrc.replace('.png', '.svg');
    $(this).attr('src', newSrc);
  });
}



///////////////////////////////////////
//      Banner
///////////////////////////////////////

function fullscreen(){
	var wh = $(window).height();
	if(wh > 700){
		$('body').find('.fs').css('height', wh + "px");
	}else{
		$('body').find('.fs').css('height', "700px");
	}
}

$(document).ready(function() { fullscreen(); });
$(window).resize(function() { fullscreen(); });



$(document).scroll(function(){

	var st=($(document).scrollTop()/4);
	var opac=1-($(document).scrollTop()/600);

	$('#banner .banner-inner').css({
		"margin-top":st,
		"margin-bottom":-st,
		"opacity":opac
	});

});



///////////////////////////////////////
//      Gallery
///////////////////////////////////////

// $(document).ready(function(){
//   var gallery = $('.gallery');
//   var images = gallery.find('.gallery__item');
//   images.each(function(){
//     $(this).height(imgHeight);
//   });
// });


///////////////////////////////////////////////////////////////////////////////
});})(jQuery, this); // on ready end
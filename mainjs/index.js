
/* Sticky Menu Bar Fixed After Scoll Down */



window.onscroll = function() {myFunction()};



var header = document.getElementById("menuber");

var sticky = header.offsetTop;



function myFunction() {

  if (window.pageYOffset > sticky) {

    header.classList.add("sticky");

  } else {

    header.classList.remove("sticky");

  }

}





/* Animation After Scoll Down for 5 Section and About Us /Contect us / our team */

// Trigger CSS animations on scroll.



jQuery(function($) {

  

  // Function which adds the 'animated' class to any '.animatable' in view

  var doAnimations = function() {

    

    // Calc current offset and get all animatables

    var offset = $(window).scrollTop() + $(window).height(),

        $animatables = $('.animatable');

    

    // Unbind scroll handler if we have no animatables

    if ($animatables.length == 0) {

      $(window).off('scroll', doAnimations);

    }

    

    // Check all animatables and animate them if necessary

		$animatables.each(function(i) {

       var $animatable = $(this);

			if (($animatable.offset().top + $animatable.height() - 20) < offset) {

        $animatable.removeClass('animatable').addClass('animated');

			}

    });



	};

  

  // Hook doAnimations on scroll, and trigger a scroll

	$(window).on('scroll', doAnimations);

  $(window).trigger('scroll');



});;

/* Telecommunication Slide Show Effect Js */

import jQuery from "jquery";
import breakpoints from "breakpoints-js";
// import browser from "browser";
/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
function detectMob() {
	return ( ( window.innerWidth <= 800 ) || ( window.innerHeight <= 600 ) );
}

(function($) {
	var	$window = $(window),
		$body = $('body')


	// Breakpoints.
	breakpoints({
		xlarge:   [ '1281px',  '1680px' ],
		large:    [ '981px',   '1280px' ],
		medium:   [ '737px',   '980px'  ],
		small:    [ '481px',   '736px'  ],
		xsmall:   [ null,      '480px'  ]
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Mobile?
	if (detectMob()) {
		$body.addClass('is-mobile');
	} else {
		breakpoints.on('>medium', function() {
			$body.removeClass('is-mobile');
		});
		breakpoints.on('<=medium', function() {
			$body.addClass('is-mobile');
		});
	}

	$('.scrolly').on('click', function(event) {
    event.preventDefault();

    const target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });

	// Header.
		// if ($banner.length > 0
		// &&	$header.hasClass('alt')) {

		// 	$window.on('resize', function() { $window.trigger('scroll'); });

		// 	$banner.scrollex({
		// 		bottom:		$header.outerHeight() + 1,
		// 		terminate:	function() { $header.removeClass('alt'); },
		// 		enter:		function() { $header.addClass('alt'); },
		// 		leave:		function() { $header.removeClass('alt'); }
		// 	});

		// }

})(jQuery);
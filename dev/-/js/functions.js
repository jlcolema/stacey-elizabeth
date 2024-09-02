(function($){})(window.jQuery);

$(document).ready(function (){

	// Menu Toggle

	$("header .toggle").click(function(){

		$(this).parent().toggleClass("active");

	});

	// Contact Toggle

	$(".contact .toggle").click(function(){

		$(this).parent().toggleClass("active");

	});

	// Smooth Scrolling

	$('.top a').click(function(){
			
		$('html, body').animate({scrollTop:0}, 'slow');

		return false;

	});

	// Projects

	/* $(function(){
	
		var $container = $('#container');
	
		$container.isotope({

			itemSelector: '#container li',
			layoutMode: 'fitRows'

		});

		$(window).smartresize(function() {

			// Begin code to change columns based on width
		
			console.log($container.width());

			if ( $container.width() >= 0 && $container.width() <= 300 ) {

				$cols = 1.00;

			} else if ( $container.width() > 300 && $container.width() <= 490 ) {
			
				$cols = 2.00;
			
			} else if ( $container.width() > 490 && $container.width() <= 725 ) {
			
				$cols = 3.00;
			
			} else {

				$cols = 4.00;

			}

			// End code to change columns based on width

			$container.isotope({
			
				resizable: false,
				masonry: { columnWidth: $container.width() / $cols }
				
			});
			
		}).smartresize();

		$container.imagesLoaded( function(){
		
			$(window).smartresize();
			
		});
	
	}); */

});


$(window).load(function() {

});

$(window).resize(function() {
	
});
(function($){})(window.jQuery);

$(document).ready(function (){

	// Menu Toggle

	$("nav ul").hide();

	$("nav .toggle").click(function() {

		$(this).toggleClass("active");

		$("nav ul").slideToggle("fast");

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

});


$(window).load(function() {

    $('.overview-inner').stickyMojo({footerID: '#contact', contentID: '#main'});

});

$(window).resize(function() {
	
});
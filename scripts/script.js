$(document).ready(function(){

	function animateComplete(){
		alert('animation is complete');
	}

	$("section > h2").on("click", function(){

		$(this).fadeOut(2000).fadeIn(500);

		$(this).fadeTo(200, 0.2)
					 .fadeTo(2000, 0.8)
					 .fadeTo(200, 0.2)
					 .fadeTo(2000, 0.8)
					 .fadeTo(200, 0.2)
					 .fadeTo(2000, 0.8);
		// can only animate elements that have numeric values.
	});

});
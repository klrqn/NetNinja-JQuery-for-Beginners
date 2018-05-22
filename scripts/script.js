$(document).ready(function(){

	function animateComplete(){
		alert('animation is complete');
	}

	$("section > h2").on("click", function(){

		$(this).animate({"width" : "500px", "height": "50px"}, 2000, "linear", animateComplete);
		// can only animate elements that have numeric values.
	});

});
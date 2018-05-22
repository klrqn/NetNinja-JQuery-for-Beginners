// #18

$(document).ready(function(){

		$("*").on('click', function(e){

			console.log("the event type is: " + e.type);
			console.log('the target is: ' + e.target);
			console.log(e.target);
			console.log(e.target.innerHTML);
			console.log('x coordinate of the event is: ' + e.pageX);
			console.log('y coordinate of the event is: ' + e.pageY);
			e.stopPropagation();
	});


})
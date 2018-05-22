// #17

$("#lead-banner").click(function() {
	alert('you clicked the lead banner id')
});


// list of jQuery Event Methods
// https://www.w3schools.com/jquery/jquery_ref_events.asp

$(document).on("ready", function() {
	alert('on ready!');
})

//shorthand jquery! this particular event shorthand
$(function(){
	alert('everything goes in here');
});


$(window).on("load", function(){
	console.log('this waits for the window to load to execute');
});

//shorthand for above
$(window).load(function(){
	console.log('see above');
})
// // #13
// // check the value of a property by entering it into the first position of the css method

// console.log($("#social-nav").css("position")); // relative
// console.log($("#social-nav").css("top")); // -40px

// // chained changed css properties
// $("#social-nav").css("top", "-200px").css("left", "300px"); //ok for one or two...
// // reset
// $("#social-nav").css("top", "-40px").css("left", "0px");

// // if you're changing a lot of values
// // pass through an object into the css method
// var objCSS = {
// 	"top": "-40px",
// 	"left": "300px",
// 	"opacity": "0.7",
// 	"border-top": "10px solid red"
// }

// $("#social-nav").css(objCSS);


// #14
// .removeClass() .addClass() .toggleClass()
// $('header .wrapper').removeClass('wrapper');

// > means immediate decendant
// > direct child div to the header
// $('header > div').addClass('wrapper');

// console.log($('#lead-banner a')[0]);

var button = ("#lead-banner a");

$("#lead-banner a")[0].onclick = function() {
	$("#points-of-sale").toggleClass('open');
	return false;
}
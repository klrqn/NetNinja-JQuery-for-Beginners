//#10

var wrapper = "<div class='wrapper'>";
var button = $('.button');
var wrapped = true;

button[0].onclick = function(){
	if (wrapped) {
		$("section").unwrap();
		wrapped = !wrapped;
		button.text('wrap');
	} else {
		$("section").wrapAll(wrapper);
		wrapped = !wrapped;
		button.text('unwrap');
	}
}

// #11
// .empty() - removes the inner HTML of an element
// .remove() - removes an entire element.

// button.empty();
// $("#points-of-sale").empty();
// button.remove();


// #12 Changing Attributes
// .removeAttr()	- removes an attribute completely
// .attr()				- can read or set an attribute

$("#contact img").removeAttr("alt");
$("#contact img").attr("alt", 'location');

console.log("the images attribute value is: " + $("#contact img").attr("alt"));


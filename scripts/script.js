
// // next method
// $("#contact-methods").next().css({border: "3px solid red"});

// // previous method
// $("#social-nav").prev().css({border: "3px solid blue"});

// // parent method and (all) parents method
// $(".banner-title").parent().css({border: "2px solid green"});
// $(".banner-title").parents().css({border: "2px solid green"});

// // children
// $("#social-nav").children().css({border: "2px solid purple"});

// // find !
// $("#contact").find(".facebook").css({border: "3px solid orange"});
// //vs
// $("#contact .facebook")
// // find is faster than the above

// // closest moves UP the DOM
// $("#social-nav").closest(".wrapper").css({border: "3px solid red"});

// // all methods chained together
// $("#contact-methods").css({ border: "2px solid red" })
// 	.next().css({ border: "2px dashed green" })
// 	.closest("section").css({ border: "2px solid blue" });

// var tweet = "<div style='margin: 20px; padding: 10px; background: #ddd'>The big fight live: Ham vs Cheese!</div>"

// // $("#tweets div").append(tweet);
// // $("#tweets div").prepend(tweet);

// // $("#tweets div p").before(tweet);
// // $("#tweets div p").after(tweet);

// // $("#tweets div").html(tweet);
// $("#tweets div p").text(tweet);

//#10
//wrapping of elements, the parent wraps the child -> ul > li >/ul
// wrap() unwrap() wrapAll()

// // wrap each section individually
// $("section").wrap("<div>");
// // unwraps
// $("section").unwrap("<div>");
// // wraps all sections together in one div
// $("section").wrapAll("<div>");

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
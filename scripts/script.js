
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

// all methods chained together
$("#contact-methods").css({ border: "2px solid red" })
	.next().css({ border: "2px dashed green" })
	.closest("section").css({ border: "2px solid blue" });
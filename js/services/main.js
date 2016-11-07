var main = function() {

};

$(document).on("mouseenter", ".exampleBox", function(evt) {
	$(this).children(".moreInfo").show("fast");
});

$(document).on("mouseleave", ".exampleBox", function(evt) {
	$(this).children(".moreInfo").hide("fast");
});

$(document).ready(main);
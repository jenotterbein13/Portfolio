app.directive("hover", function() {
	return {
		restrict: "C",
		link: function(scope, element, attrs){
			element.on("hover", function(e){
				e.stopPropogation();
				element.children(".moreInfo").show();
			})
		}
	}
});
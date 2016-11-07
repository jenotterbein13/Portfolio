var app = angular.module("Portfolio", ["ngRoute", 'ngMaterial']);

app.config( function($routeProvider) {
	$routeProvider
	.when("/", {
		controller: "MainController",
		templateUrl: "views/main.html"
	})
	.when("/about", {
		controller: "AboutMeController",
		templateUrl: "views/aboutme.html"
	})
	.when("/contact", {
		controller: "ContactController",
		templateUrl: "views/contactme.html"
	})
	.otherwise({
		redirectTo: "/"
	});
})
angular.module('myApp', ['ui.router'])
.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/views/home.html',
			controller: 'HomeCtrl'
		})
		.state('about', {
			url: '/about',
			template: '<p>about</p>'
		})
		.state('contact', {
			url: '/contact',
			template: '<p>contact</p>'
		})
}]);
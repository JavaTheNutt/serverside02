angular.module('myApp', [
	'ui.router',
	'underscore',
	'ui.bootstrap'
])
.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/views/home.html',
			controller: 'HomeCtrl'
		})
		.state('all_comp',{
			url: '/record_companies/all',
			templateUrl: 'partials/views/record_companies.html',
			controller: 'RecordCompaniesCtrl'
		})
}]);
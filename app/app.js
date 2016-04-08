angular.module('myApp', [
	'ui.router',
	'datatables',
	'datatables.bootstrap',
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
		.state('about', {
			url: '/about',
			template: '<p>about</p>'
		})
		.state('contact', {
			url: '/contact',
			template: '<p>contact</p>'
		})
		.state('all_comp',{
			url: '/record_companies/all',
			templateUrl: 'partials/views/record_companies.html',
			controller: 'RecordCompaniesCtrl'
		})
		.state('add_comp', {
			url: '/record_companies/add',
			templateUrl: 'partials/views/add_record_company.html',
			controller: 'AddCompanyCtrl'
		})
}]);
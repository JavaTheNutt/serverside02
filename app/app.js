angular.module('myApp', [
	'ui.router',
	'underscore',
	'ui.bootstrap',
	'ngMessages'
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
		.state('add_cust', {
			url: '/add_customer',
			templateUrl: 'partials/views/add_customer.html',
			controller: 'AddCustCtrl'
		})
		.state('artists', {
			url: '/artists',
			templateUrl: 'partials/views/artists.html',
			controller: 'ArtistCtrl'
		})
		.state('albums', {
			url:  '/albums',
			templateUrl: 'partials/views/albums.html',
			controller: 'AlbumCtrl'
		})
		.state('add_review', {
			url: '/add_review',
			templateUrl: 'partials/views/add_review.html',
			controller: 'AddReviewCtrl'
		})
}]);
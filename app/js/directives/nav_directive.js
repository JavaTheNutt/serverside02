angular.module('myApp').directive('navDirective', function () {
	return {
		restrict: 'E',
		templateUrl: 'partials/templates/nav.html',
		controller: 'NavCtrl',
		scope: '='
	}
});
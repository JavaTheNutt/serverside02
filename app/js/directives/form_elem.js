angular.module('myApp').directive('formElemDirective', function () {
	return {
		restrict: 'E',
		templateUrl: 'partials/templates/form_elem.html',
		controller: 'FormElemCtrl',
		scope: {}
	}
});
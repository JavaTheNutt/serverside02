angular.module('myApp').controller('FormElemCtrl', ['$scope', function ($scope) {
	$scope.id = '';
	$scope.label = {
		width: 'col-sm-2',
		text: ''
	};
	$scope.inputField = {
		type: 'text',
		value: '',
		placeholder: ''
	}
}]);
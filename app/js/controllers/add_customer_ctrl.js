angular.module('myApp')
.controller('AddCustCtrl', function ($scope, customers) {
	$scope.emailTooltip = 'Please enter a valid email address';
	// todo submit form once valid
	$scope.submitClicked = function (data) {
		if($scope.addCustForm.$valid){
			
		}
	};

});
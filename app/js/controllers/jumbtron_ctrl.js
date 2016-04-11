angular.module('myApp').controller('JumboCtrl', function ($scope, loginService) {
	loginService.checkLogin(function (res) {
		$scope.custLoggedIn = res.custLoggedIn;
		$scope.adminLoggedIn = res.adminLoggedIn;
		$scope.localLoggedIn = ($scope.adminLoggedIn || $scope.custLoggedIn)
	})
});
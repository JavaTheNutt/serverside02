angular.module('myApp').controller('JumboCtrl', function ($scope, loginService) {
	loginService.checkLogin(function (res) {
		$scope.loggedIn = res;
	})
});
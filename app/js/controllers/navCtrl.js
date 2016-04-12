angular.module('myApp').controller('NavCtrl', ['$scope', '$window', 'loginService', function ($scope, $window, loginService) {
	$scope.links = [
		{
			name: 'Record Companies',
			state: 'all_comp'
		}
	];
	$scope.user = {};
	$scope.logoutClicked = function () {
		if ($scope.adminLoggedIn || $scope.custLoggedIn) {
			console.log('already logged in');
			loginService.logout(function (res) {
				$scope.$parent.refreshLogin();
			});
		}
	};
	$scope.submitClicked = function (user) {
		console.log(user);
		if (user.uname.indexOf('@') > 0) {
			loginService.loginCustomer(user, function (data) {
				console.log('returned from log in customer service');
				console.log(data);
				$scope.$parent.setName(data.customername);
				$scope.$parent.refreshLogin();
			})
		} else {
			loginService.loginUser(user, function (data) {
				console.log('data returned from service');
				console.log(data);
				$scope.showLogin = false;
				$scope.user.uname = '';
				$scope.user.password = '';
				$scope.$parent.refreshLogin();
			})
		}

	};
}]);
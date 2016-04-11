angular.module('myApp').controller('NavCtrl', ['$scope', '$window', 'loginService', function ($scope, $window, loginService) {
	var refreshLocal = function () {
		loginService.checkLogin(function (res) {
			$scope.custLoggedIn = res.custLoggedIn;
			$scope.adminLoggedIn = res.adminLoggedIn;
			if ($scope.adminLoggedIn || $scope.custLoggedIn) {
				$scope.localLoggedIn = true;
			} else {
				$scope.localLoggedIn = false;
			}
		});
	};
	$scope.links = [
		{
			name: 'Record Companies',
			subLinks: [
				{
					text: 'Show record companies',
					state: 'all_comp'
				},
				{
					text: 'Add record companies',
					state: 'add_comp'
				}
			]


		}
	];
	$scope.user = {};
	$scope.logoutClicked = function () {
		if ($scope.adminLoggedIn || $scope.custLoggedIn) {
			console.log('already logged in');
			loginService.logout(function (res) {
				window.location.reload();
				refreshLocal();
			});
		}
	};
	$scope.submitClicked = function (user) {
		console.log(user);
		if (user.uname.indexOf('@') > 0) {
			loginService.loginCustomer(user, function (data) {
				console.log('returned from log in customer service');
				console.log(data);
			})
		} else {
			loginService.loginUser(user, function (data) {
				console.log('data returned from service');
				console.log(data);
				refreshLocal();
				$scope.showLogin = false;
				$scope.user.uname = '';
				$scope.user.password = '';
				$window.location.reload();
			})
		}

	};
	refreshLocal();
}]);
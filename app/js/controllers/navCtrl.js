angular.module('myApp').controller('NavCtrl', ['$scope', '$window', 'loginService', function ($scope, $window, loginService) {
	var refreshLocal = function () {
		loginService.checkLogin(function (res) {
			$scope.localLoggedIn = res;
		});
	};
	$scope.links =[
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
		if($window.sessionStorage['loggedIn']){
			console.log('already logged in');
			loginService.logout(function (res) {
				window.location.reload();
				refreshLocal();
			});
		}
	};
	$scope.submitClicked = function (user) {
		loginService.loginUser(user, function (data) {
			console.log('data returned from service');
			console.log(data);
			refreshLocal();
			$scope.showLogin = false;
			$scope.user.uname = '';
			$scope.user.password = '';
			$window.location.reload();
		})
	};
	refreshLocal();
}]);
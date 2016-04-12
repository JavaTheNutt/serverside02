angular.module('myApp').controller('MainCtrl', ['$scope', 'loginService', function ($scope, loginService) {
	var setCurrentCustName = function(custName){
		$scope.currentCustName = custName;
	};
	var checkLogin = function () {
		console.log('Main controller checking login');
		loginService.checkLogin(function (data) {
			$scope.adminLoggedIn = data.adminLoggedIn;
			$scope.custLoggedIn = data.custLoggedIn;
			if($scope.custLoggedIn){
				loginService.getCurrentCustName(function (res) {
					$scope.currentCustName = res;
				})
			}
		})
	};
	checkLogin();
	$scope.refreshLogin = function () {
		checkLogin();
	};
	$scope.setName = function (name) {
		setCurrentCustName(name);
	}
}]);
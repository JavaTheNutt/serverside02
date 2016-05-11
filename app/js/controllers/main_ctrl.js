angular.module('myApp').controller('MainCtrl', ['$scope', 'loginService', function ($scope, loginService) {
	$scope.sentFromAlbum = false;
	$scope.companyToShow = '-1';
	$scope.artistToShow = '-1';
	$scope.albumToReview = '-1';
	var setCurrentCustName = function(custName){
		$scope.currentCustName = custName;
	};
	var checkLogin = function () {
		console.log('Main controller checking login');
		loginService.checkLogin(function (data) {
			$scope.adminLoggedIn = data.adminLoggedIn;
			$scope.custLoggedIn = data.custLoggedIn;
			if($scope.custLoggedIn){
				loginService.getCurrentCustName(function (name, id) {
					$scope.currentCustName = name;
					$scope.currentCustId = id;
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
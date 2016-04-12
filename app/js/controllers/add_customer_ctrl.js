angular.module('myApp')
.controller('AddCustCtrl', function ($scope, customers, loginService) {
	$scope.emailTooltip = 'Please enter a valid email address';
	// todo submit form once valid
	$scope.submitClicked = function (data) {
		if($scope.addCustForm.$valid){
			if($scope.$parent.adminLoggedIn || $scope.$parent.$custLoggedIn){
				loginService.logout();
			}
			customers.addCustomer($scope.customer, function (res) {
				console.log('customer added');
				var customer = {
					uname: $scope.customer.custEmail,
					password: $scope.customer.custPassword
				};
				loginService.loginCustomer(customer, function (data) {
					$scope.$parent.refreshLogin();
					$scope.$parent.setName($scope.customer.custName);
					$scope.customer.custName = '';
					$scope.customer.custStreet = '';
					$scope.customer.custTown = '';
					$scope.customer.custEmail = '';
					$scope.customer.custPassword = '';
					$scope.customer.custConfPassword = '';
					$scope.addCustForm.$setUntouched();
					$scope.addCustForm.$setPristine();
				})
			});
		}
	};
	
});
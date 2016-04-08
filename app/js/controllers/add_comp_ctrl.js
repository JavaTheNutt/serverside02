angular.module('myApp').controller('AddCompanyCtrl',['$scope', function ($scope) {
	$scope.comp = {
		companyname: '',
		companycity: '',
		representative: '',
		representativeemail: '',
		website: ''
	};
	$scope.buttonClicked = function () {
		console.log('test');
	};
}]);
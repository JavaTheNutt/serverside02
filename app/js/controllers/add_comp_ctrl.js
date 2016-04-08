angular.module('myApp').controller('AddCompanyCtrl',['$scope', 'GenerateForm', function ($scope, GenerateForm) {
	$scope.comp = {
		companyname: '',
		companycity: '',
		representative: '',
		representativeemail: '',
		website: ''
	};
	var fieldList = GenerateForm.getCompanyForm;
	var compName = _.find(fieldList, function (item) {
		item.name = 'companyname'
	});
	$scope.fields = fieldList;
	$scope.buttonClicked = function () {
		console.log(fieldList);
	};
}]);
angular.module('myApp')
	.controller('RecordCompaniesCtrl',
		['$scope','$q', 'recordCompanies',
			function ($scope,$q,  recordCompanies) {
				$scope.isInEdit = false;
				var getAllCompanies = function(done){
					recordCompanies.getAllCompanies(function (res) {
						$scope.list = res.data;
						done(res.data);
					})
				};
				var getOneCompany = function(id, done){
					recordCompanies.getSingleCompany(id, function (res) {
						done(res);
					})
				};

				$scope.deleteClicked = function (id) {
					
				};
				$scope.tableHeadings = ['Name', 'City', 'Representative', 'Representative Email', 'Website'];
				$scope.personToAdd = {};
				var getPerson = {};
				$scope.submitClicked = function (person) {
					if ($scope.isInEdit) {
						recordCompanies.updateCompany(person, function (data) {
							console.log(data);
						})
					}
				};
				$scope.resetDisable = function(){
					$scope.isInEdit = false;
				};
				$scope.editClicked = function(id){
					getOneCompany(id, function (res) {
						getPerson.id = res.data.companyid;
						getPerson.name = res.data.companyname;
						getPerson.city = res.data.companycity;
						getPerson.rep = res.data.representative;
						getPerson.repemail = res.data.representativeemail;
						getPerson.website = res.data.website;
						$scope.personToAdd = getPerson;
						$scope.isInEdit = true;
					});

				};

				$scope.data = getAllCompanies(function (data) {
					$scope.data = data;
				});

}]);
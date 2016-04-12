angular.module('myApp')
	.controller('RecordCompaniesCtrl',
		['$scope', '$q', 'recordCompanies', 'loginService',
			function ($scope, $q, recordCompanies, loginService) {
				$scope.isInEdit = false;
				$scope.data  =[];
				var setLoggedIn = function () {
					loginService.checkLogin(function (res) {
						$scope.loggedIn = res;
						console.log(res);
					})
				};
				var getAllCompanies = function () {
					recordCompanies.getAllCompanies(function (res) {
						$scope.data = res.data;
					})
				};
				var getOneCompany = function (id, done) {
					recordCompanies.getSingleCompany(id, function (res) {
						done(res);
					})
				};
				$scope.deleteClicked = function (id) {
					recordCompanies.deleteCompany(id, function (res) {
						getAllCompanies();
					});

				};
				$scope.tableHeadings = ['Name', 'City', 'Representative', 'Representative Email', 'Website'];
				$scope.personToAdd = {website: 'http://'};
				$scope.sortType = 'companycity';
				$scope.sortReverse = false;
				$scope.searchCompanies = '';

				var getPerson = {};

				$scope.submitClicked = function (person) {
					if ($scope.addRecordCompany.$valid) {
						if ($scope.isInEdit) {
							recordCompanies.updateCompany(person, function (data) {
								console.log(data);
							});
						} else {
							recordCompanies.insertCompany(person, function () {
								console.log('insert callback');
							});
						}
						getAllCompanies();
					} else {
						console.log('Form Invalid');
					}
				};

				$scope.resetDisable = function () {
					$scope.isInEdit = false;
					$scope.addRecordCompany.$setPristine();
				};

				$scope.editClicked = function (id) {
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

				getAllCompanies();
				setLoggedIn();
			}]);
angular.module('myApp')
	.controller('RecordCompaniesCtrl',
		['$scope','$q', 'recordCompanies','DTOptionsBuilder', 'DTColumnBuilder',
			function ($scope,$q,  recordCompanies, DTOptionsBuilder, DTColumnBuilder) {
				var getAllCompanies = function(done){
					recordCompanies.getAllCompanies(function (res) {
						$scope.list = res.data;
						done(res.data);
					})
				};
				var getTableData  = function () {
					var deferred = $q.defer();
					getAllCompanies(function (data) {
						deferred.resolve(data);
					});
					return deferred.promise;
				};
				$scope.dtOptions = DTOptionsBuilder.fromFnPromise(getTableData())
					.withBootstrap()
					.withPaginationType('full_numbers');
				$scope.dtColumns = [
					DTColumnBuilder.newColumn('companyname').withTitle('Company Name'),
					DTColumnBuilder.newColumn('companycity').withTitle('Company City'),
					DTColumnBuilder.newColumn('representative').withTitle('Representative')
				];

}]);
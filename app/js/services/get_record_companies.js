angular.module('myApp')
.factory('recordCompanies', function ($http, $log) {
    return{
        getAllCompanies: function (successCallback) {
            $http.get('../api/record_companies/get_companies.php?all').then(function (res) {
                successCallback(res);
            });
        },
        getSingleCompany: function (id, successCallback) {
			$http.get('../api/record_companies/get_companies.php?comp=' + id).then(function(res) {
				console.log(res);
				successCallback(res);
			});
		},
		updateCompany: function(company, successCallback){
			$log.debug('recived by service');
			var comp = JSON.stringify(company);
			comp = JSON.parse(comp);
			$log.debug(comp);
			var req = {
				method: 'POST',
				url: '../api/record_companies/update_company.php?stat=update',
				headers: {
					'Content-Type': 'application/json'
				},
				data:{
					comp: comp
				}
			};
			console.log(req);
			$http(req).then(function (res) {
				console.log('recived from api');
				$log.debug(res);
				console.log(res.data.comp);
				successCallback(res.data);
			});
			/*$http.post('../api/record_companies/update_company.php?stat=update', company )
				.then(function (data) {
					console.log('recived from api');
					console.log(data);
					successCallback(data.data);
				})*/

		}
    }
});
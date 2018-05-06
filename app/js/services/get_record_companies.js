angular.module('myApp')
	.factory('recordCompanies', function ($http, $log) {
		return {
			getAllCompanies: function (successCallback) {
				$http.get('api/record_companies/get_companies.php?all').then(function (res) {
					successCallback(res);
				});
			},
			getSingleCompany: function (id, successCallback) {
				$http.get('api/record_companies/get_companies.php?comp=' + id).then(function (res) {
					console.log(res);
					successCallback(res);
				});
			},
			updateCompany: function (company, successCallback) {
				$log.debug('recived by update service');
				var comp = JSON.stringify(company);
				comp = JSON.parse(comp);
				$log.debug(comp);
				var req = {
					method: 'POST',
					url: 'api/record_companies/update_company.php?stat=update',
					headers: {
						'Content-Type': 'application/json'
					},
					data: {
						comp: comp
					}
				};
				$http(req).then(function (res) {
					console.log('recived from api');
					$log.debug(res);
					console.log(res.data.comp);
					successCallback(res.data);
				}, function (res) {
					console.log(res);
				});
			},
			insertCompany: function (company, successCallback) {
				console.log('recived by insert service');
				var comp = JSON.parse(JSON.stringify(company));
				var req = {
					method: 'POST',
					url: 'api/record_companies/update_company.php?stat=add',
					headers: {
						'Content-Type': 'application/json'
					},
					data: {
						comp: comp
					}
				};
				$http(req).then(function (res) {
					successCallback();
				});
			},
			deleteCompany: function (id, successcallback) {
				$http.get('api/record_companies/update_company.php?stat=delete&delete=' + id).then(function (data) {
					var dat = data.data;
					successcallback(JSON.parse(JSON.stringify(dat)));
				});
			}
		}
	});
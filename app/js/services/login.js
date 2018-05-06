angular.module('myApp')
	.factory('loginService', function ($http) {
		return {
			loginUser: function (data, successCallback) {
				console.log('recived by login service');
				var user = JSON.parse(JSON.stringify(data));
				var req = {
					method: 'POST',
					url: 'api/record_companies/login_user.php?login',
					headers: {
						'Content-Type': 'application/json'
					},
					data: {
						user: user
					}
				};
				$http(req).then(function (data) {
					console.log('recived from api');
					successCallback(data);
				});
			},
			loginCustomer: function (data, successCallback) {
				console.log('sent to customer login service');
				var customer = JSON.parse(JSON.stringify(data));
				console.log(customer);
				var req = {
					method: 'POST',
					url: 'api/record_companies/login_user.php?logincust',
					headers: {
						'Content-Type': 'application/json'
					},
					data: {
						customer: customer
					}
				};
				$http(req).then(function (data) {
					console.log('recived from customer login api');
					console.log(data);
					successCallback(data);
				});
			},
			//todo check customer or admin logged in
			checkLogin: function (successcallback) {
				console.log('recived by check login service');
				$http.get('api/record_companies/login_user.php?getlogin').then(function (res) {
					console.log('recived from check login api');
					var json = JSON.parse(JSON.stringify(res));
					successcallback(json.data);
				});
			},
			logout: function (successCallback) {
				console.log('recived by logout service');
				$http.get('api/record_companies/login_user.php?logout').then(function (res) {
					console.log('recived from check login api');
					var json = JSON.parse(JSON.stringify(res));
					successCallback(json.data.loggedIn);
				})
			},
			getCurrentCustName: function (successCallback) {
				$http.get('api/record_companies/login_user.php?getCurrentName').then(function (res) {
					var json = JSON.parse(JSON.stringify(res));
					console.log('recived name');
					console.log(json);
					successCallback(json.data.name, json.data.id);
				})
			}
		}
	});
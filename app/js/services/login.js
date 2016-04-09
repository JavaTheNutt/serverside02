angular.module('myApp')
.factory('loginService', function ($http) {
	return{
		loginUser: function (data, successCallback) {
			console.log('recived by login service');
			var user = JSON.parse(JSON.stringify(data));
			var req = {
				method: 'POST',
				url: '../api/record_companies/login_user.php?login',
				headers: {
					'Content-Type': 'application/json'
				},
				data:{
					user: user
				}
			};
			$http(req).then(function(data){
				console.log('recived from api');
				successCallback(data);
			});
		},
		checkLogin: function (successcallback) {
			console.log('recived by check login service');
			$http.get('../api/record_companies/login_user.php?getlogin').then(function (res) {
				console.log('recived from check login api');
				var json = JSON.parse(JSON.stringify(res));
				successcallback (json.data.loggedIn);
			});
		},
		logout: function (successCallback) {
			console.log('recived by logout service');
			$http.get('../api/record_companies/login_user.php?logout').then(function(res){
				console.log('recived from check login api');
				var json = JSON.parse(JSON.stringify(res));
				successCallback(json.data.loggedIn);
			})
		}
	}
});
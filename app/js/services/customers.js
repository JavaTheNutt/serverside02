angular.module('myApp')
.factory('customers', function($http){
	return{
		getEmails: function (successCallback) {
			console.log('recived by get emails service');
			$http.get('api/customers/customer.php?allUsernames').then(function (res) {
				successCallback(res.data);
			})
		},
		addCustomer: function(customer, successCallback){
			console.log('recived by add customer api');
			var cust = JSON.parse(JSON.stringify(customer));
			console.log(cust);
			var req = {
				method: 'POST',
				url: 'api/customers/customer.php?add_cust',
				headers: {
					'Content-Type': 'application/json'
				},
				data:{
					cust: cust
				}
			};
			console.log(req);
			$http(req).then(function (res) {
				console.log('recived from api');
				console.log(res.data);
				successCallback(res);
			})
		}
	}
});
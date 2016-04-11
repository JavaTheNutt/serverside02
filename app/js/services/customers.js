angular.module('myApp')
.factory('customers', function($http){
	return{
		getEmails: function (successCallback) {
			console.log('recived by get emails service');
			$http.get('../api/customers/customer.php?allUsernames').then(function (res) {
				successCallback(res.data);
			})
		},
		addCustomer: function(customer, successCallback){
			
		}
	}
});
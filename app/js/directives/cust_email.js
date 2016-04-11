angular.module('myApp').directive('custEmail', function (customers) {
	return{
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, elem, attr, mCtrl) {
			var usernames = [];
			function getNames() {
				customers.getEmails(function (data) {
					usernames = data;
				})
			}
			getNames();
			mCtrl.$validators.emailTaken = function (modelValue, viewValue) {
				if(usernames.indexOf(viewValue) === -1){
					scope.emailTooltip = 'This email is taken';
					return true;
				}
				return false;
			}
		}
		
	}
});
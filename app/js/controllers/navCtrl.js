angular.module('myApp').controller('NavCtrl', ['$scope', function ($scope) {
	$scope.links =[
		{
			text: 'About',
			state: 'about'
		},
		{
			text: 'Contact',
			state: 'contact'
		}
	]
}]);
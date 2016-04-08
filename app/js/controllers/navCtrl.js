angular.module('myApp').controller('NavCtrl', ['$scope', function ($scope) {
	$scope.links =[
		{
			name: 'Record Companies',
			subLinks: [
				{
					text: 'Show record companies',
					state: 'all_comp'
				},
				{
					text: 'Add record companies',
					state: 'add_comp'
				}
			]


		}
	]
}]);
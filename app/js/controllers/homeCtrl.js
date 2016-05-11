angular.module('myApp')
	.controller('HomeCtrl', ['$scope', 'reviews',  function ($scope, reviews) {
		var getReviews = function () {
			var partialResults = [];
			reviews.getAllReviews(function (data) {
				if(parseInt($scope.$parent.albumToReview) < 0){
					console.log('no params');
					$scope.reviews = data;
				}else{
					console.log($scope.$parent.albumToReview);
					for (var i = 0; i < data.length; i++){
						console.log(data[i]);
						if(data[i].albumId === $scope.$parent.albumToReview){
							partialResults.push(data[i]);
						}
					}
					$scope.reviews = partialResults;
				}
			})
		};
		getReviews();
	}]);
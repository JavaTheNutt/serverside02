angular.module('myApp').controller('AddReviewCtrl', ['$scope', '$state', 'reviews', function ($scope, $state, reviews) {
	var setAlbumName = function(){
		reviews.getAlbumName($scope.$parent.albumToReview, function (albumName) {
			$scope.albumName = albumName;
		})
	};
	setAlbumName();

	$scope.submitClicked = function(){
		var data = {
			album: $scope.$parent.albumToReview,
			cust: $scope.$parent.currentCustId,
			review: $scope.review
		};
		if($scope.review.length > 0){
			console.log('review valid');
			reviews.addReview(data, function () {
				console.log('review added');
			})
		}
	}
}]);
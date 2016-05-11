angular.module('myApp').controller('ArtistCtrl', ['$scope','$state', 'Artists', function ($scope, $state ,Artists) {
	$scope.data = [];
	$scope.isInEdit = false;
	var getAllArtists = function () {
		Artists.getAllArtists(function (data) {
			$scope.data = data;
		})
	};
	$scope.artistToAdd = {
		website: 'http://'
	};
	$scope.sortType = 'artistname';
	$scope.sortReverse = false;
	$scope.searchCompanies = '';
	getAllArtists();
	$scope.editClicked = function(id){
		$scope.isInEdit = true;
		Artists.getOneArtist(id, function (res) {
			console.log(res);
			$scope.artistToAdd.name = res.artistname;
			$scope.artistToAdd.city = res.city;
			$scope.artistToAdd.website = res.website;
			$scope.artistToAdd.id = res.artistid;
		});
	};
	$scope.resetAddArtist = function(){
		$scope.isInEdit = false;
		$scope.addArtist.$setPristine();
	};
	$scope.submitArtist = function () {
		if(!$scope.isInEdit){
			Artists.addArtist($scope.artistToAdd, function(data){
				$scope.artistToAdd = {};
				$scope.addArtist.$setPristine();
				getAllArtists();
				if($scope.$parent.sentFromAlbum){
					$scope.$parent.sentFromAlbum = false;
					$state.go('albums');
				}
			});
		} else{
			Artists.updateArtist($scope.artistToAdd, function (data) {
				$scope.artistToAdd = {};
				$scope.addArtist.$setPristine();
				getAllArtists();
				if($scope.$parent.sentFromAlbum){
					$scope.$parent.sentFromAlbum = false;
					$state.go('albums');
				}
			})
		}

	};
	$scope.deleteClicked = function (id) {
		Artists.deleteArtist(id, function (data) {
			console.log(data);
			getAllArtists();
		})
	};
	$scope.showAlbumsClicked = function(id){
		console.log(id);
		$scope.$parent.artistToShow = '' + id;
		$state.go('albums');
	};
}]);
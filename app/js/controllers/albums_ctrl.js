angular.module('myApp').controller('AlbumCtrl', ['$scope', '$state', 'Albums',  function ($scope, $state, Albums) {
	$scope.albumToAdd = {};
	$scope.isInEdit = false;
	$scope.showAdd = false;
	$scope.showSearch = false;
	$scope.searchRecordsType = 'all';
	$scope.specificSearch = 'standard';

	var allCompanies = {companyname: 'All', companyid: '-1'};
	var allArtists = {artistname: 'All', artistid: '-1'};
	$scope.artistSearchValue = allArtists;
	$scope.companySearchValue = allCompanies;
	var albumArtist = $scope.$parent.artistToShow;
	var albumCompany = $scope.$parent.companyToShow;
	var allAlbums;
	console.log(albumArtist);
	console.log(albumCompany);
	var getAllAlbums = function(){
		Albums.getAllAlbums(function (data) {
			allAlbums = data;
			console.log('showing search values');
			console.log($scope.$parent.artistToShow);
			console.log($scope.$parent.companyToShow);
			$scope.advancedFilter();
		})
	};
	var removeAlbumsByArtist = function () {
		var tempAlbums = [];
		for(var i = 0; i < $scope.albums.length; i++){
			console.log('artist iteration\t' + i);
			console.log('artid of current album\t' + $scope.albums[i].artist);
			console.log('artid for search\t' + $scope.artistSearchValue.artistid);
			if($scope.albums[i].artist === $scope.artistSearchValue.artistid){
				console.log('artist found');
				tempAlbums.push($scope.albums[i]);
			}
		}
		return tempAlbums;
	};
	var removeAlbumByCompany = function () {
		var tempAlbums = [];
		for(var i = 0; i < $scope.albums.length; i++){
			console.log('comapny iteration\t' + i);
			console.log('compid of current album\t' + $scope.albums[i].recordcompany);
			console.log('compid for search\t' + $scope.companySearchValue.companyid);
			if($scope.albums[i].recordcompany === $scope.companySearchValue.companyid){
				console.log('company found');
				tempAlbums.push($scope.albums[i]);
			}
		}
		return tempAlbums;
	};
	$scope.searchCriteriaChanged = function () {
		if($scope.searchRecordsType === 'all'){
			$scope.artistSearchValue.artistid = '-1';
			$scope.companySearchValue.companyid = '-1';
		}else if($scope.searchRecordsType === 'artists'){
			$scope.companySearchValue.companyid = '-1';
		}else if($scope.searchRecordsType === 'companies'){
			$scope.artistSearchValue.artistid = '-1';
		}
		$scope.$parent.artistToShow = '-1';
		$scope.$parent.companyToShow = '-1';
		$scope.advancedFilter();
	};
	$scope.advancedFilter = function(){
		$scope.albums = allAlbums;
		if(parseInt($scope.$parent.artistToShow) >= 0){
			$scope.artistSearchValue.artistid = $scope.$parent.artistToShow;
		}
		if(parseInt($scope.$parent.companyToShow) >= 0){
			$scope.companySearchValue.companyid = $scope.$parent.companyToShow;
		}
		console.log('advanced filter called');
		console.log('art\t' + $scope.artistSearchValue.artistid);
		console.log('comp\t' + $scope.companySearchValue.companyid);

		var artId = parseInt($scope.artistSearchValue.artistid);
		var compId = parseInt($scope.companySearchValue.companyid);
		console.log('art\t' + artId + '\ncomp\t' + compId);
		if(artId < 0 && compId < 0){
			$scope.albums = allAlbums;
			console.log($scope.albums.length);
			return;
		}
		if(artId >= 0){
			$scope.albums = removeAlbumsByArtist();
		}
		if(compId >= 0){
			$scope.albums = removeAlbumByCompany();
		}
	};
	var getAllArtists = function () {
		Albums.getArtistsNames(function (data) {
			console.log('albums controller recived names');
			console.log(data);
			$scope.artists = data;
			$scope.artistSearch = angular.copy(data);
			$scope.artistSearch.unshift(allArtists);
			console.log('artistsearch');
			console.log($scope.artistSearch);
			$scope.artistSearchValue = $scope.artistSearch[0];
			$scope.albumToAdd.artistid = $scope.artists[0]
		})
	};
	var getAllRecordCompanies = function () {
		Albums.getCompanyNames(function (data) {
			console.log('company names recived by the album controller ');
			console.log(data);
			$scope.companies = data;
			$scope.companySearch = angular.copy(data);
			$scope.companySearch.unshift(allCompanies);
			$scope.companySearchValue = $scope.companySearch[0];
			$scope.albumToAdd.companyid = $scope.companies[0];

		})
	};
	var getOneArtist = function(id){
		for (var i = 0; i < $scope.artists.length; i++){
			if($scope.artists[i].artistid === id){
				console.log('artist found');
				$scope.albumToAdd.artistid = $scope.artists[i];
			}
		}
	};
	var getOneCompany = function (id) {
		for(var i = 0; i < $scope.companies.length; i++){
			if($scope.companies[i].companyid === id){
				console.log('company found');
				$scope.albumToAdd.companyid = $scope.companies[i];
			}
		}
	};
	var populateChoicebox = function(artistId, companyId){
		getOneArtist(artistId);
		getOneCompany(companyId);
	};
	$scope.resetAdd = function(){
		resetData();
	};
	var getData = function () {
		$scope.refreshLogin();
		getAllAlbums();
		getAllArtists();
		getAllRecordCompanies()
	};
	var resetData = function () {
		$scope.albumToAdd = {};
		populateChoicebox($scope.artists[0].artistid, $scope.companies[0].companyid);
		$scope.addAlbum.$setPristine(true);
		$scope.isInEdit = false;
	};
	var success = function () {
		resetData();
		getData();
	};
	var fail = function (err) {
		console.log(err);
	};
	var toggleShowSearch = function (isShowSearch, isShowAdd) {
		$scope.showAdd = isShowAdd;
		$scope.showSearch = isShowSearch;
	};

	getData();
	$scope.isPanelView = true;
	$scope.switchViewText = 'Table View';
	$scope.showSearchClicked = function () {
		if($scope.showSearch){
			toggleShowSearch(false, false);
		}else{
			toggleShowSearch(true, false);
		}
	};
	$scope.showAddClicked = function () {
		if($scope.showAdd){
			toggleShowSearch(false, false);
		}else{
			toggleShowSearch(false, true);
		}
	};
	$scope.changeSwitchViewText = function () {
		if($scope.isPanelView){
			$scope.switchViewText = 'Table View';
		} else {
			$scope.switchViewText = 'Panel View';
		}
	};
	$scope.deleteClicked = function (id) {
		Albums.deleteAlbum(id, success(), function (err) {
			console.log(err)
		});
	};
	$scope.editClicked = function (id) {
		$scope.isInEdit = true;
		$scope.showAdd = true;
		Albums.getOneAlbum(id, function (data) {
			$scope.albumToAdd.name = data['albumname'];
			$scope.albumToAdd.year = parseInt(data['year']);
			$scope.albumToAdd.genre = data['genre'];
			$scope.albumToAdd.albumartwork = data['albumartwork'];
			$scope.albumToAdd.albumid = data['albumid'];
			populateChoicebox(data['artist'], data['recordcompany']);
		},
		function (error) {
			console.log('error');
			console.log(error);
		})
	};
	$scope.submitClicked = function(){
		console.log('submit clicked');
		if($scope.addAlbum.$valid){
			if($scope.isInEdit){
				Albums.editAlbum($scope.albumToAdd, function () {
					console.log('success');
						resetData();
						getData();
					},
				function (err) {
					console.log(err);
				});
			}else{
				Albums.addAlbum($scope.albumToAdd, function () {
						resetData();
						getData();
					},
					function (err) {
						console.log(err);
					})
			}
		}
	};
	$scope.addArtistClicked = function(){
		$scope.$parent.sentFromAlbum = true;
		$state.go('artists');
	};
	$scope.addCompanyClicked = function () {
		$scope.$parent.sentFromAlbum = true;
		$state.go('all_comp');
	};
	$scope.reviewAlbumClicked = function (id) {
		$scope.$parent.albumToReview = id;
		$state.go('add_review');
	};
	$scope.showReviewsClicked = function(id){
		$scope.$parent.albumToReview = ''+ id;
		$state.go('home');
	}
}]);
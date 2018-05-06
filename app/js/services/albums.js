angular.module('myApp').factory('Albums', function ($http) {
	return{
		getAllAlbums: function (successCallback) {
			$http.get('api/albums/album.php?allalbums').then(function (data) {
				console.log('recived from get albums api');
				console.log(data.data);
				successCallback(JSON.parse(JSON.stringify(data.data)))
			})
		},
		getOneAlbum: function (id, successCallback, errorCallback) {
			$http.get('api/albums/album.php?onealbum=' + id).then(function (res) {
				if(res.data.stat){
					successCallback(JSON.parse(JSON.stringify(res.data.result)));
				}else{
					errorCallback(res.data.reason);
				}
				
			})
		},
		getArtistsNames: function (successCallback) {
			$http.get('api/albums/album.php?artistsnames').then(function(data){
				console.log('recived from get all artists names api');
				console.log(data);
				successCallback(JSON.parse(JSON.stringify(data.data)));
			})
		},
		getCompanyNames: function (successCallback) {
			$http.get('api/albums/album.php?companynames').then(function(data){
				console.log('recived from get all record company names api');
				successCallback(JSON.parse(JSON.stringify(data.data)));
			})
		},
		addAlbum: function (albumToAdd, successCallback, errorCallback) {
			console.log('recived by the add album service');
			var alb = JSON.parse(JSON.stringify(albumToAdd));
			console.log(alb);
			var albumToBeSent = {
				album_name : alb.name,
				album_year : alb.year,
				album_genre : alb.genre,
				album_artist : parseInt(alb.artistid.artistid),
				album_company : parseInt(alb.companyid.companyid),
				album_artwork : alb.albumartwork
			};
			console.log(albumToBeSent.album_artwork);
			var req = {
				method: 'POST',
				url : 'api/albums/update_album.php?stat=add',
				headers:{
					'Content-Type': 'application/json'
				},
				data:{
					album: albumToBeSent
				}
			};
			$http(req).then(function (res) {
				console.log('recived from add album api');
				var response = JSON.parse(JSON.stringify(res));
				var check = res.data.res;
				if(check){
					successCallback();
				}else{
					errorCallback(res.data.reason);
				}
			});
		},
		deleteAlbum: function (id, successCallback, errorCallback) {
			var req = {
				method: 'GET',
				url: 'api/albums/update_album.php?stat=delete&delete=' + id,
				headers: {
					'Content-Type': 'application/json'
				}
			};
			$http(req).then(function (res) {
				if(res.data.res){
					successCallback()
				}else{
					errorCallback(res.data.reason);
				}
			})
		},
		editAlbum: function (album, successCallback, errorCallback) {
			console.log('recived by edit album service');
			console.log(album);
			var albumToBeSent = {
				'id': parseInt(album.albumid),
				'artist': parseInt(album.artistid.artistid),
				'company': parseInt(album.companyid.companyid),
				'artwork': album.albumartwork
			};
			var req = {
				method: 'POST',
				url: 'api/albums/update_album.php?stat=edit',
				headers: {
					'Content-Type': 'application/json'
				},
				data:{
					album: albumToBeSent
				}
			};
			$http(req).then(function (response) {
				if(response.data.stat){
					successCallback();
				}else{
					errorCallback(response.data.reason);
				}
			})
		}
	}
});
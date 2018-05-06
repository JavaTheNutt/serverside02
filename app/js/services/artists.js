angular.module('myApp').factory('Artists', function ($http) {
	return{
		getAllArtists: function(successCallback){
			$http.get('api/artists/artist.php?allartists').then(function (res) {
				successCallback(JSON.parse(JSON.stringify(res.data)));
			});
		},
		getOneArtist: function (id, successCallback) {
			$http.get('api/artists/artist.php?artistid=' + id).then(function (res) {
				console.log('recived single company');
				successCallback(JSON.parse(JSON.stringify(res.data)));
			})
		},
		addArtist: function (artist, successCallback) {
			console.log('recived by add artist service');
			var art = JSON.parse(JSON.stringify(artist));
			console.log(art);
			var req = {
				method: 'POST',
				url: 'api/artists/update_artist.php?stat=add',
				headers: {
					'Content-Type': 'application/json'
				},
				data:{
					artist: art
				}
			};
			$http(req).then(function (res) {
				console.log(res);
				successCallback(res);
			})
		},
		deleteArtist: function (id, successCallback) {
			$http.get('api/artists/update_artist.php?stat=delete&delete=' + id).then(function (data) {
				successCallback(data);
			})
			
		},
		updateArtist: function (artist, successCallback) {
			var art = JSON.parse(JSON.stringify(artist));
			console.log(art);
			var req = {
				method: 'POST',
				url: 'api/artists/update_artist.php?stat=update',
				header:{
					'Content-Type': 'application/json'
				},
				data:{
					artist: art
				}
			};
			$http(req).then(function(data){
				console.log('recived from update artist api');
				console.log(data);
				successCallback(data);
			})
		}
	};
});
angular.module('myApp').factory('reviews', function ($http) {
	return{
		getAlbumName: function (id, successCallback) {
			$http.get('../api/albums/album.php?onealbum=' + id).then(function (res) {
				if(res.data.stat){
					console.log('albumname recived');
					console.log(res.data.result.albumname);
					successCallback(JSON.parse(JSON.stringify(res.data.result.albumname)));
				}
			})
		},
		addReview: function (review, successCallback) {
			var req = {
				method: 'POST',
				url: '../api/review/review.php?addreview',
				headers:{
					'Content-Type': 'application/json'
				},
				data:{
					review: review
				}
			};
			$http(req).then(function(res){
				console.log(res);
				if(res.data.stat){
					successCallback();
				}
			})
		},
		getAllReviews: function (successCallback) {
			$http.get('../api/review/review.php?allreviews').then(function (data) {
				successCallback(data.data);
			})
		}
	}
});
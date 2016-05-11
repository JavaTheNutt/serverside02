<?php
require '../inc/init_review.inc.php';

if(isset($_GET['allreviews'])){
	 $reviews = json_decode(json_encode($review->getAllReviews()), true);
	$reviewsToSend = array();
	foreach ($reviews as $review1) {
		$albumForReviewId = $review1['album'];
		$albumForReview = json_decode(json_encode($album->oneAlbum($albumForReviewId)), true);
		$albumForReviewName = $albumForReview['albumname'];
		$albumArtist = json_decode(json_encode($artist->oneArtist($albumForReview['artist'])), true);
		$albumCompany = json_decode(json_encode($record_company->oneRecordCompany($albumForReview['recordcompany'])), true);
		$albumArtistName = $albumArtist['artistname'];
		$albumCompanyName = $albumCompany['companyname'];
		$customerForReviewId = $review1['customer'];
		$customerForReview = json_decode(json_encode($customer->getById($customerForReviewId)), true);
		$customerForReviewName = $customerForReview['customername'];
		$temp_review = array('reviewId'=> $review1['reviewid'],
							 'albumId' => $review1['album'],
			'albumName'=> $albumForReviewName,
			'custId'=>$review1['customer'],
			'custName'=> $customerForReviewName,
			'review'=> $review1['review'],
			'artwork'=> $albumForReview['albumartwork'],
			'artistName'=> $albumArtistName,
			'companyName'=> $albumCompanyName
			);
		array_push($reviewsToSend, $temp_review);
	}
	echo json_encode($reviewsToSend);
}elseif (isset($_GET['addreview'])){
	if(isCustLoggedIn()){
		$json = file_get_contents('php://input');
		$json = json_decode($json, true);
		$reviewToAdd = $json['review'];
		$old_count = count($review->getAllReviews());
		$review->insertReview($reviewToAdd['album'], $reviewToAdd['cust'], $reviewToAdd['review']);
		$new_count = count($review->getAllReviews());
		if($new_count > $old_count){
			echo json_encode(array('stat'=> true));
		}else{
			echo json_encode(array('stat'=> false, 'reason'=> 'sql error'));
		}
	}else{
		echo json_encode(array('stat' => false, 'reason'=> 'not authorised'));
	}
}
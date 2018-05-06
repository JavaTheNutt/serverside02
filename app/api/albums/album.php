<?php
require '../inc/init_album.inc.php';
header('ContentType: application/json');
if(isset($_GET['allalbums'])){
	$list = json_decode(json_encode($album->allAlbums()), true);
	echo json_encode($list);
}elseif (isset($_GET['artistsnames'])){
	echo json_encode($album->getAllArtistsNames());
}elseif(isset($_GET['companynames'])){
	echo json_encode($album->getAllRecordCompanyNames());
}elseif (isset($_GET['onealbum'])){
	$result = json_decode(json_encode($album->oneAlbum($_GET['onealbum'])), true);
	if(count($result) === 9){
		echo json_encode(array('stat' => true, 'result' => $result));
	}else{
		echo json_encode(array('stat'=> false, 'reason' => 'sql error'));
	}

}
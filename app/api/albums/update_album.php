<?php
require '../inc/init_album.inc.php';
header('Content-Type: application/json');
if(isset($_GET['stat'])){
	$context = $_GET['stat'];
	if(isAdminLoggedIn()){
		$json = file_get_contents('php://input');
		$obj = json_decode($json, true);
		$alb = $obj['album'];
		if($context === 'add'){
			$old_count = count($album->allAlbums());
			$album->insertAlbum($alb['album_name'], $alb['album_year'], $alb['album_genre'], $alb['album_artist'], $alb['album_company'], $alb['album_artwork']);
			$new_count = count($album->allAlbums());
			if($old_count < $new_count){
				echo json_encode(array('res' => true));
			}else{
				echo json_encode(array('res' => false, 'reason' => 'sql_error'));
			}
		}elseif ($context === 'delete'){
			$id = $_GET['delete'];
			$old_count = count($album->allAlbums());
			$album->removeAlbum($id);
			$new_count = count($album->allAlbums());
			if($new_count === $old_count){
				echo json_encode(array('res' => false, 'reason' => 'sql error'));
			}else{
				echo json_encode(array('res' => true));
			}
		}elseif ($context === 'edit'){
			$album->updateAlbum($alb['id'], $alb['artist'], $alb['company'], $alb['artwork']);
			$testAlb =  json_decode(json_encode($album->oneAlbum($alb['id'])), true);
			$sent = array('artist'=> $alb['artist'], 'company' => $alb['company'], 'artwork'=> $alb['artwork']);
			$databaseVal = array('artist' => intval($testAlb['artist']), 'company' => intval($testAlb['recordcompany']), 'artwork'=> $testAlb['albumartwork']);
			$check = $sent === $databaseVal;
			if($check){
				echo json_encode(array('stat'=> true));
			}else{
				echo json_encode(array('stat'=> false, 'reason'=> 'entry does not match params', 'sent' => $alb, 'database' => $testAlb));
			}

		}
	}else{
		echo json_encode(array('res' => false,'reason' => 'not_authorised'));
	}
}
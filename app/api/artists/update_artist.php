<?php
require '../inc/init_artist.inc.php';
header('Content-Type: application/json');
if(isset($_GET['stat'])){
	$context = $_GET['stat'];
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$art = $obj['artist'];
	if($context === 'add'){
		$artist->insertArtist($art['name'], $art['city'], $art['website']);
	}elseif ($context === 'delete'){
		$id = $_GET['delete'];
		$artist->deleteArtist($id);
	}elseif ($context === 'update'){
		$artist->updateArtist($art['id'], $art['website']);
		
	}
}
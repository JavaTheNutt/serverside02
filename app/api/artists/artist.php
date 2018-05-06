<?php
require '../inc/init_artist.inc.php';
header('Content-Type: application/json');
if(isset($_GET['allartists'])){
	echo json_encode($artist->allArtists());
}elseif (isset($_GET['artistid'])){
	$id = $_GET['artistid'];
	echo json_encode($artist->oneArtist($id));
}
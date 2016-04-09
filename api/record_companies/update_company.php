<?php
require '../inc/init.inc.php';
header('Content-Type: application/json');
if(isset($_GET['stat'])){
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$comp = $obj['comp'];
	if($_GET['stat'] == 'update'){
		$record_company->updateRecord($comp['id'], $comp['rep'], $comp['repemail'], $comp['website']);
	}elseif ($_GET['stat'] == 'add'){
		$record_company->insertRecordCompany($comp['name'], $comp['city'], $comp['rep'], $comp['repemail'], $comp['website']);
	} elseif ($_GET['stat'] == 'delete'){
		$id = $_GET['delete'];
		$record_company->deleteRecord($id);
	}
}


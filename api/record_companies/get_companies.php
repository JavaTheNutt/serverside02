<?php
require '../inc/init.inc.php';
header('Content-Type: application/json');
if(isset($_GET['all'])){
	echo json_encode($record_company->allRecordCompanies());
}elseif (isset($_GET['comp'])){
	$id = $_GET['comp'];
	echo json_encode($record_company->oneRecordCompany($id));
}
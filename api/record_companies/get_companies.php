<?php
require '../inc/init.inc.php';
if(isset($_GET['all'])){
	header('Content-Type: application/json');
	echo json_encode($record_company->allRecordCompanies());
}
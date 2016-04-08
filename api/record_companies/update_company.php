<?php
require '../inc/init.inc.php';
header('Content-Type: application/json');
if(isset($_GET['stat'])){
	if($_GET['stat'] = 'update'){
		$json = file_get_contents('php://input');
		$obj = json_decode($json, true);
		$id = $obj->id;
		$rep = $obj->rep;
		$email = $obj->repemail;
		$website = $obj->website;
		$record_company->updateRecord($id, $rep, $email, $website);
		
	}

}

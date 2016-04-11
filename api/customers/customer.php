<?php
require '../inc/init_customer.inc.php';

if(isset($_GET['allUsernames'])){
	$res = $customer->getEmails();
	$data = array();
	foreach ($res as $val){
		array_push($data, $val['customeremail']);
	}
	echo json_encode($data);
}

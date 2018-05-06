<?php
require '../inc/init_customer.inc.php';

if(isset($_GET['allUsernames'])){
	$res = $customer->getEmails();
	$data = array();
	foreach ($res as $val){
		array_push($data, $val['customeremail']);
	}
	echo json_encode($data);
}elseif(isset($_GET['add_cust'])){
	$json = file_get_contents('php://input');
	$json = json_decode($json, true);
	$data = $json['cust'];
	$customer->insertCustomer($data['custName'], $data['custStreet'], $data['custTown'], $data['custEmail'], $data['custPassword']);
	$cust = $customer->getByEmail($data['custEmail']);
	echo json_encode($cust);
} 

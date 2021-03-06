<?php
require '../inc/access.inc.php';
header('Content-Type: application/json');
if(isset($_GET['login'])){
	$json = file_get_contents('php://input');
	$user = json_decode($json, true);
	$cred = $user['user'];
	logInUser($cred['uname'], $cred['password'], $dbh);
	$loggedIn = isset($_SESSION['adminLoggedIn']) ? $_SESSION['adminLoggedIn']: '';

	$response = $loggedIn ? array("loggedIn"=> true): array("loggedIn"=> false);
}else{
	$response = array("status"=> "404");
}
if(isset($_GET['getlogin'])){
	$adminLoggedIn = $_SESSION['adminLoggedIn'];
	$custLoggedIn = $_SESSION['custLoggedIn'];
	$response = array("adminLoggedIn"=> $adminLoggedIn, "custLoggedIn"=> $custLoggedIn);
}
if(isset($_GET['logout'])){
	logOutUser();
	$loggedIn = $_SESSION['adminLoggedIn'];
	$response = $loggedIn ? array("loggedIn"=> true): array("loggedIn"=> false);
}
if(isset($_GET['logincust'])){
	$json = file_get_contents('php://input');
	$customer = json_decode($json, true);
	$custCred = $customer['customer'];
	$uname = $custCred['uname'];
	$pass = $custCred['password'];
	/*$response = array('uname'=> $uname, 'password'=> $pass);*/

	$response =  logInCustomer($uname, $pass, $dbh);
}
if(isset($_GET['getCurrentName'])){
	if(isset($_SESSION['custName'])){
		$name = $_SESSION['custName'];
		$id = $_SESSION['custId'];
		$response = array('name'=> $name, 'id'=> $id);
	}else{
		$response = array('name' => null);
	}
}
echo json_encode($response);

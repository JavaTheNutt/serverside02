<?php
require '../inc/access.inc.php';
header('Content-Type: application/json');
if(isset($_GET['login'])){
	$json = file_get_contents('php://input');
	$user = json_decode($json, true);
	$cred = $user['user'];
	logInUser($cred['uname'], $cred['password'], $dbh);
	$loggedIn = $_SESSION['adminLoggedIn'];
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
	$response =  json_encode(logInCustomer($custCred['uname'], $custCred['password'], $dbh));
}
echo json_encode($response);
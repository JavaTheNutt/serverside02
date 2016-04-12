<?php
require 'db.inc.php';
session_start();
function logInUser($userName, $password, $db){
	$stmt = $db->prepare("SELECT * FROM users WHERE users.uname = :username AND password = :pass");
	$stmt->bindParam(':username', $userName, PDO::PARAM_STR);
	$password = SHA1($password);
	$stmt->bindParam(':pass', $password, PDO::PARAM_STR);
	$stmt->execute();
	$count = $stmt->rowCount();
	if($count == 1){
		$_SESSION['custLoggedIn'] = false;
		$_SESSION['adminLoggedIn'] = true;
	} else{
		$_SESSION['adminLoggedIn'] = false;
	}
}
function logInCustomer($email, $password, $db){
	$stmt = $db->prepare("SELECT * FROM customers WHERE customeremail = :username AND customerpassword = :password");
	$password = SHA1($password);
	$stmt->bindParam(':username', $email, PDO::PARAM_STR);
	$stmt->bindParam(':password', $password, PDO::PARAM_STR);
	$stmt->execute();
	$count = $stmt->rowCount();
	if($count == 1){
		$_SESSION['adminLoggedIn'] = false;
		$_SESSION['custLoggedIn'] = true;
		$cust = $stmt->fetch(PDO::FETCH_ASSOC);
		$_SESSION['custName'] = $cust['customername'];
	} else{
		$_SESSION['custLoggedIn'] = false;
		unset($_SESSION['custName']);
		$cust = array('loggedIn'=> false);
	}
	return $cust;
}
function logOutUser(){
	$_SESSION['adminLoggedIn'] = false;
	$_SESSION['custLoggedIn'] = false;
}
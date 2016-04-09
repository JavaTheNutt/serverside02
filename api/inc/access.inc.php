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
		$_SESSION['adminLoggedIn'] = true;
	} else{
		$_SESSION['adminLoggedIn'] = false;
	}
}
function logOutUser(){
	$_SESSION['adminLoggedIn'] = false;
}
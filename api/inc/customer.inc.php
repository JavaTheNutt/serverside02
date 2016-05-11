<?php
class Customer{
	private $db;

	public function __construct($database)
	{
		$this->db = $database;
	}
	public function getEmails(){
		$stmt = $this->db->prepare("SELECT customeremail FROM customers");
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
	public function insertCustomer($name, $street, $town, $email, $password){
		$stmt = $this->db->prepare(
			"INSERT INTO customers (customername, customerstreet, customertown, customeremail, customerpassword
) VALUES (:name, :street, :town, :email, :password)");
		$password = SHA1($password);
		$stmt->bindParam(':name', $name, PDO::PARAM_STR);
		$stmt->bindParam(':street', $street, PDO::PARAM_STR);
		$stmt->bindParam(':town', $town, PDO::PARAM_STR);
		$stmt->bindParam(':email', $email, PDO::PARAM_STR);
		$stmt->bindParam(':password', $password, PDO::PARAM_STR);
		$stmt->execute();
	}
	public function getByEmail($email){
		$stmt = $this->db->prepare("SELECT * FROM customers where customeremail = :email");
		$stmt->bindParam(':email', $email, PDO::PARAM_STR);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}
	public function getById($id){
		$stmt = $this->db->prepare("SELECT * FROM customers where customerid = :id");
		$stmt->bindParam(':id', $id, PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}
}
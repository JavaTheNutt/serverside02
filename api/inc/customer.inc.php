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
}
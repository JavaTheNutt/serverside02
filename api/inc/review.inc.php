<?php
class Review{
	private $db;

	public function __construct($database)
	{
		$this->db = $database;
	}
	public function insertReview($album, $customer, $review){
		$stmt = $this->db->prepare("INSERT INTO review(album, customer, review)
VALUES (:album, :customer, :review)");
		$stmt->bindParam(':album', $album, PDO::PARAM_INT);
		$stmt->bindParam(':customer', $customer, PDO::PARAM_INT);
		$stmt->bindParam(':review', $review, PDO::PARAM_STR);
		$stmt->execute();
	}
	public function getAllReviews(){
		$stmt = $this->db->prepare("SELECT * FROM review");
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
}
<?php

class Artist
{
	private $db;

	public function __construct($database)
	{
		$this->db = $database;
	}

	public function allArtists()
	{
		$stmt = $this->db->prepare("SELECT * FROM artists");
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_OBJ);
	}

	public function insertArtist($name, $city, $website)
	{
		$stmt = $this->db->prepare("INSERT INTO artists(artistname, city, website) VALUES
(:artistname, :city, :website)");
		$stmt->bindParam(':artistname', $name, PDO::PARAM_STR);
		$stmt->bindParam(':city', $city, PDO::PARAM_STR);
		$stmt->bindParam(':website', $website, PDO::PARAM_STR);
		$stmt->execute();
	}

	public function updateArtist($artistid, $artistwebsite)
	{
		$stmt = $this->db->prepare("UPDATE artists SET website = :website WHERE artistid = :artistid");
		$stmt->bindParam(':artistid', $artistid, PDO::PARAM_INT);
		$stmt->bindParam(':website', $artistwebsite, PDO::PARAM_STR);
		$stmt->execute();
	}

	public function oneArtist($id)
	{
		$stmt = $this->db->prepare("SELECT * FROM artists WHERE artistid = :id");
		$stmt->bindParam(':id', $id, PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_OBJ);
	}

	public function deleteArtist($id)
	{
		$stmt = $this->db->prepare("DELETE FROM artists WHERE artistid = :id");
		$stmt->bindParam(':id', $id, PDO::PARAM_INT);
		$stmt->execute();
	}

}
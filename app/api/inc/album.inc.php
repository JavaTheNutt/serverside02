<?php
class Album{
	private $db;

	public function __construct($database)
	{
		$this->db = $database;
	}

	public function allAlbums()
	{
		$stmt = $this->db->prepare("SELECT albumid, albumname, year, genre, artist, recordcompany, companyname, artistname, albumartwork FROM albums JOIN artists ON albums.artist = artists.artistid JOIN recordcompanies ON albums.recordcompany = recordcompanies.companyid");
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_OBJ);
	}

	public function insertAlbum($name, $year, $genre, $artist, $recordcompany, $artwork)
	{
		$stmt = $this->db->prepare("INSERT INTO albums (albumname, year, genre, artist, recordcompany, albumartwork) VALUES
(:albumname, :albumyear, :albumgenre, :artist, :recordcompany, :artwork)");
		$stmt->bindParam(':albumname', $name, PDO::PARAM_STR);
		$stmt->bindParam(':albumyear', $year, PDO::PARAM_INT);
		$stmt->bindParam(':albumgenre', $genre, PDO::PARAM_STR);
		$stmt->bindParam(':artist', $artist, PDO::PARAM_INT);
		$stmt->bindParam(':recordcompany', $recordcompany, PDO::PARAM_INT);
		$stmt->bindParam('artwork', $artwork, PDO::PARAM_STR);
		$stmt->execute();
	}

	public function oneAlbum($id)
	{
		$stmt = $this->db->prepare("SELECT albumid, albumname, year, genre, artist, recordcompany, companyname, artistname, albumartwork FROM albums JOIN artists ON albums.artist = artists.artistid JOIN recordcompanies ON albums.recordcompany = recordcompanies.companyid WHERE :id = albumid");
		$stmt->bindParam(':id', $id, PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_OBJ);
	}

	public function getByLabel($companyId)
	{
		$stmt = $this->db->prepare("SELECT albumid, albumname, year, genre, artist, recordcompany, companyname, artistname, albumartwork FROM albums JOIN artists ON albums.artist = artists.artistid JOIN recordcompanies ON albums.recordcompany = recordcompanies.companyid WHERE recordcompany = :companyId");
		$stmt->bindParam(':companyId', $companyId, PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_OBJ);
	}

	public function getByArtist($artistId)
	{
		$stmt = $this->db->prepare("SELECT albumid, albumname, year, genre, artist, recordcompany, companyname, artistname, albumartwork FROM albums JOIN artists ON albums.artist = artists.artistid JOIN recordcompanies ON albums.recordcompany = recordcompanies.companyid WHERE artist = :artistId");
		$stmt->bindParam('artistId', $artistId, PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_OBJ);
	}
	public function getAllArtistsNames(){
		$stmt = $this->db->prepare("SELECT artistname, artistid FROM artists");
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
	public function getAllRecordCompanyNames(){
		$stmt = $this->db->prepare("SELECT companyname, companyid FROM recordcompanies");
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
	public function removeAlbum($id){
		$stmt = $this->db->prepare("DELETE FROM albums WHERE albumid = :id");
		$stmt->bindParam(':id', $id, PDO::PARAM_INT);
		$stmt->execute();
	}
	public function updateAlbum($albumid, $albumartist, $albumcompany, $albumartwork){
		$stmt = $this->db->prepare("UPDATE albums SET artist = :artist, recordcompany = :company, albumartwork = :artwork WHERE albumid = :id");
		$stmt->bindParam(':id', $albumid, PDO::PARAM_INT);
		$stmt->bindParam(':artist', $albumartist, PDO::PARAM_INT);
		$stmt->bindParam(':company', $albumcompany, PDO::PARAM_INT);
		$stmt->bindParam(':artwork', $albumartwork, PDO::PARAM_STR);
		$stmt->execute();
	}
}
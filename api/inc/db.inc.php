<?php

class Database extends PDO
{
	public $dbserver = '';
	public $database = '';
	public $username = '';
	public $password = '';

	public function __construct(/*$dsn, $username, $passwd, $options*/)
	{
		$this->dbserver = 'localhost';
		$this->database = 'musicstore';
		$this->username = 'root';
		$this->password = 'root';
		try {
			parent::__construct("mysql:host=" . $this->dbserver . ";dbname=" . $this->database, $this->username, $this->password);
			$this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		} catch (PDOException $e) {
			echo '<br>Problem connecting to the database -- ';
			exit($e->getMessage());
		}

	}
}

$dbh = new Database();
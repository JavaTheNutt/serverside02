<?php
require_once 'init_album.inc.php';
require_once 'init_customer.inc.php';
require_once 'init_artist.inc.php';
require_once 'init_record_company.inc.php';
require_once 'review.inc.php';

$review = new Review($dbh);
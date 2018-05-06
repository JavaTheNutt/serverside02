CREATE SCHEMA IF NOT EXISTS musicstore;
USE musicstore;
CREATE TABLE artists
(
    artistid INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    artistname VARCHAR(20) NOT NULL,
    city VARCHAR(20),
    website VARCHAR(50)
);

CREATE UNIQUE INDEX name ON artists (artistname);
CREATE TABLE customers
(
    customerid INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    customername VARCHAR(50) NOT NULL,
    customerstreet VARCHAR(30),
    customertown VARCHAR(20) NOT NULL,
    customeremail VARCHAR(50) NOT NULL,
    customerpassword CHAR(40) NOT NULL
);
CREATE TABLE recordcompanies
(
    companyid INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    companyname VARCHAR(20) NOT NULL,
    companycity VARCHAR(20),
    representative VARCHAR(20),
    representativeemail VARCHAR(20),
    website VARCHAR(40) NOT NULL
);
CREATE UNIQUE INDEX companyname ON recordcompanies (companyname);
CREATE TABLE albums
(
    albumid INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    albumname VARCHAR(50) NOT NULL,
    year YEAR(4) NOT NULL,
    genre VARCHAR(15) NOT NULL,
    artist INT(11),
    recordcompany INT(11),
    albumartwork VARCHAR(200) NOT NULL,
    CONSTRAINT fk_artist FOREIGN KEY (artist) REFERENCES artists (artistid),
    CONSTRAINT fk_recordcompany FOREIGN KEY (recordcompany) REFERENCES recordcompanies (companyid)
);
CREATE INDEX artist ON albums (artist);
CREATE UNIQUE INDEX name ON albums (albumname);
CREATE INDEX recordcompany ON albums (recordcompany);
CREATE TABLE review
(
    reviewid INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    review VARCHAR(1000) NOT NULL,
    album INT(11) NOT NULL,
    customer INT(11) NOT NULL,
    CONSTRAINT rev_alb_fk FOREIGN KEY (album) REFERENCES albums (albumid),
    CONSTRAINT rev_cust_fk FOREIGN KEY (customer) REFERENCES customers (customerid)
);
CREATE INDEX rev_alb_fk ON review (album);
CREATE INDEX rev_cust_fk ON review (customer);
CREATE TABLE users
(
    uname CHAR(5) PRIMARY KEY NOT NULL,
    password CHAR(40) NOT NULL
);
CREATE UNIQUE INDEX users_uname_uindex ON users (uname);
INSERT INTO musicstore.customers (customerid, customername, customerstreet, customertown, customeremail, customerpassword) VALUES (34, 'Jon Snow', 'Castle Black', 'The Wall', 'jsnow@gmail.com', 'aa99d4a5858b78ae4818fa1dc99a23a8d5e530c6');
INSERT INTO musicstore.customers (customerid, customername, customerstreet, customertown, customeremail, customerpassword) VALUES (35, 'Jamie Lannister', 'Casterly Rock', 'The Westerlands', 'jlannister@gmail.com', '3044a3dc71f644433692a79e1bbe84c1157eb15a');
INSERT INTO musicstore.customers (customerid, customername, customerstreet, customertown, customeremail, customerpassword) VALUES (36, 'Joe Wemyss', '20 Barrack Street', 'Waterford', 'joewemyss3@gmail.com', '4f573d5ce6a6a41ff43560c5dd66aa9b9dabc1a9');
INSERT INTO musicstore.users (uname, password) VALUES ('root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785');

INSERT INTO musicstore.recordcompanies (companyid, companyname, companycity, representative, representativeemail, website) VALUES (2, 'Geffen', 'New York', 'James Murphy', 'jmurphy@geffen.com', 'https://www.geffen.com');
INSERT INTO musicstore.recordcompanies (companyid, companyname, companycity, representative, representativeemail, website) VALUES (3, 'MCD', 'Detroit', 'Paul White', 'pwhite@mcd.org', 'https://www.mcd.org');
INSERT INTO musicstore.recordcompanies (companyid, companyname, companycity, representative, representativeemail, website) VALUES (6, 'Sony Music', 'Chicago', 'Jason Walshe', 'jwalshe@sony.com', 'https://www.sony.com');
INSERT INTO musicstore.recordcompanies (companyid, companyname, companycity, representative, representativeemail, website) VALUES (7, 'Monster Records', 'Washington DC', 'James Dunne', 'jdunne@monster.com', 'https://www.monster.com');
INSERT INTO musicstore.recordcompanies (companyid, companyname, companycity, representative, representativeemail, website) VALUES (8, 'Magic Muzik', 'Berlin', 'Jason Murphy', 'jkelly@magic.com', 'https://www.magic.com');
INSERT INTO musicstore.recordcompanies (companyid, companyname, companycity, representative, representativeemail, website) VALUES (9, 'Columbia', 'Washington', 'John Maher', 'jm@columbia.com', 'http://www.columbia.com');
INSERT INTO musicstore.recordcompanies (companyid, companyname, companycity, representative, representativeemail, website) VALUES (11, 'Rollercoaster', 'Michigan', 'John Walsh', 'jw@rollercoaster.com', 'http://www.rollercoaster.com');
INSERT INTO musicstore.recordcompanies (companyid, companyname, companycity, representative, representativeemail, website) VALUES (12, 'Roadrunner', 'Iowa', 'Micheal Burke', 'mb@roadrunner.com', 'http://www.roadrunner.com');
INSERT INTO musicstore.recordcompanies (companyid, companyname, companycity, representative, representativeemail, website) VALUES (13, 'Vertigo', 'Birmingham', 'John Osbourne', 'jo@vertigo.com', 'http://www.vertigo.com');
INSERT INTO musicstore.recordcompanies (companyid, companyname, companycity, representative, representativeemail, website) VALUES (14, 'Rca Victor', 'San Francisco', 'Grace Slick', 'gs@victor.com', 'http://www.rcavictor.com');
INSERT INTO musicstore.recordcompanies (companyid, companyname, companycity, representative, representativeemail, website) VALUES (15, 'Verve', 'Michigan', 'Lou Reed', 'lr@verve.com', 'http://www.verve.com');
INSERT INTO musicstore.recordcompanies (companyid, companyname, companycity, representative, representativeemail, website) VALUES (16, 'Atlantic', 'Atlantic City', 'John Walshe', 'jm@atlantic.com', 'http://www.atlantic.com');
INSERT INTO musicstore.artists (artistid, artistname, city, website) VALUES (5, 'Guns N'' Roses', 'Los Angeles', 'https://www.gunsnroses.com');
INSERT INTO musicstore.artists (artistid, artistname, city, website) VALUES (6, 'Metallica', 'San Jose', 'https://www.metallica.com');
INSERT INTO musicstore.artists (artistid, artistname, city, website) VALUES (7, 'Nirvana', 'Seattle', 'https://www.nirvana.com');
INSERT INTO musicstore.artists (artistid, artistname, city, website) VALUES (9, 'Alice In Chains', 'Seattle', 'https://www.aliceinchains.com');
INSERT INTO musicstore.artists (artistid, artistname, city, website) VALUES (11, 'Slipknot', 'Iowa', 'http://www.slipknot.com');
INSERT INTO musicstore.artists (artistid, artistname, city, website) VALUES (12, 'Stone Sour', 'Iowa', 'http://www.stonesour.com');
INSERT INTO musicstore.artists (artistid, artistname, city, website) VALUES (13, 'Black Sabbath', 'Birmingham', 'http://blacksabbath.com');
INSERT INTO musicstore.artists (artistid, artistname, city, website) VALUES (14, 'The Doors', 'Los Angeles', 'http://www.thedoors.com');
INSERT INTO musicstore.artists (artistid, artistname, city, website) VALUES (15, 'Jefferson Airplane', 'San Francisco', 'http://www.jeffersonairplane.com');
INSERT INTO musicstore.albums (albumid, albumname, year, genre, artist, recordcompany, albumartwork) VALUES (21, 'Nevermind', 1991, 'Grunge', 7, 2, 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg');
INSERT INTO musicstore.albums (albumid, albumname, year, genre, artist, recordcompany, albumartwork) VALUES (22, 'Dirt', 1991, 'Grunge', 9, 9, 'https://upload.wikimedia.org/wikipedia/en/b/ba/Dirt.jpg');
INSERT INTO musicstore.albums (albumid, albumname, year, genre, artist, recordcompany, albumartwork) VALUES (23, 'Slipknot', 1999, 'Nu Metal', 11, 12, 'https://upload.wikimedia.org/wikipedia/en/4/44/Slipknot_-_Slipknot2.jpg');
INSERT INTO musicstore.albums (albumid, albumname, year, genre, artist, recordcompany, albumartwork) VALUES (24, 'Paranoid', 1970, 'Heavy Metal', 13, 13, 'https://upload.wikimedia.org/wikipedia/en/6/64/Black_Sabbath_-_Paranoid.jpg');
INSERT INTO musicstore.albums (albumid, albumname, year, genre, artist, recordcompany, albumartwork) VALUES (26, 'Appetite For Destruction', 1987, 'Grunge', 5, 2, 'https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg');
INSERT INTO musicstore.albums (albumid, albumname, year, genre, artist, recordcompany, albumartwork) VALUES (27, 'Use Your Illusion I', 1991, 'Grunge', 5, 2, 'https://upload.wikimedia.org/wikipedia/en/e/ea/GnR--UseYourIllusion1.jpg');
INSERT INTO musicstore.albums (albumid, albumname, year, genre, artist, recordcompany, albumartwork) VALUES (28, 'Use Your Illusion II', 1991, 'Grunge', 5, 2, 'http://assets.rollingstone.com/assets/images/album_review/79e4a6213bc3668e8208f2b826f5666b7faf9609.jpg');
INSERT INTO musicstore.albums (albumid, albumname, year, genre, artist, recordcompany, albumartwork) VALUES (29, 'The Spaghetti Incident?', 1993, 'Grunge', 5, 2, 'https://upload.wikimedia.org/wikipedia/en/9/94/Guns_n''_Roses%3B_Spaghetti_Incident%3F_cover.jpg');
INSERT INTO musicstore.albums (albumid, albumname, year, genre, artist, recordcompany, albumartwork) VALUES (30, 'Surrealistic Pillow', 1967, 'Psychedelic Roc', 15, 14, 'http://images.hhv.de/catalog/new_shop_405x405/00248/248778.jpg');
INSERT INTO musicstore.review (reviewid, review, album, customer) VALUES (1, 'A generation defining album', 21, 36);
INSERT INTO musicstore.review (reviewid, review, album, customer) VALUES (2, 'A great album', 22, 36);
INSERT INTO musicstore.review (reviewid, review, album, customer) VALUES (3, 'A musical masterpiece', 21, 36);

DROP DATABASE IF EXISTS notetaker_db;
CREATE DATABASE notetaker_db;
USE notetaker_db;

-- Create the tables table
CREATE TABLE notes
(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR (255) NOT NULL,
  note VARCHAR (255) NOT NULL,
  PRIMARY KEY(id)
);

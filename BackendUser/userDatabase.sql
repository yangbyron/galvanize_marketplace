DROP DATABASE user_db;
CREATE DATABASE user_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL,
  user_name VARCHAR,
  user_email VARCHAR,
  is_seller BOOLEAN
);
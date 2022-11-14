DROP DATABASE user_db;
CREATE DATABASE user_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL,
  user_name VARCHAR,
  user_email VARCHAR,
  user_password VARCHAR,
  is_seller BOOLEAN
);

INSERT INTO users (user_name, user_password, is_seller) VALUES ('joe', 'admin123', true), ('luis', 'admin456', false);
DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name TEXT,
  user_password Text,
  is_seller BOOLEAN
);

INSERT INTO users (user_name, user_password, is_seller) VALUES ("joe", "admin123", true), ("luis", "admin456", false);
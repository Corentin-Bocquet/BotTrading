-- database/schema.sql

CREATE DATABASE IF NOT EXISTS trading_platform;
USE trading_platform;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  gender VARCHAR(10),
  account_number VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Exemple d’utilisateur de test
INSERT INTO users (username, email, password, first_name, gender, account_number)
VALUES (
  'john_doe',
  'john@example.com',
  '$2b$10$AZOjJgYkVsm/D3c9NEj7ruoM2r9/Y3T1hnWlRE3h9LgpiZQgQNj.C',
  'John',
  'Male',
  'ACC-00123'
);

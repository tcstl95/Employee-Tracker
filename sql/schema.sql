DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    deptID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NULL
);

CREATE TABLE roles (
    roleID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NULL,
    salary DECIMAL
    -- FOREIGN KEY (departments_id)
    -- REFERENCES department(deptID) 
    );

CREATE TABLE employee (
    empID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30)NULL
    -- roleID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- manager_id INT NULL,
    -- REFERENCES roles(roleID)
    -- REFERENCES department(id)
    -- REFERENCES employee(empID)
    -- FOREIGN KEY (departments_id)
);
/*Creating database*/
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
/*Using database*/
USE employees_db;
/*Creating department table*/
CREATE TABLE department (
    deptID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NULL
);
/*Creating roles table*/
CREATE TABLE roles (
    roleID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NULL,
    salary DECIMAL
    -- FOREIGN KEY (departments_id)
    -- REFERENCES department(deptID) 
    );
/*Creating employee tables */
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

/*For some reason I could not figure out how to use the References and foreign keys. The employee and roles tables would not show if i used these.
/*My attempt at query*/

SELECT employee.first_name, employee.last_name, employee.empID
FROM employee
JOIN department ON employee.departments_id
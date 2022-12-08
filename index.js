//References//
const mysql = require('mysql2');
const inquirer = require("inquirer");
// const table = require('console.table');

//Trying to use the MySql but application kept freezing
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password:"Stlblues#1",
        database: "employees_db",
    },
);

// My main menu for application
const selectMenu =()=>{
    return inquirer
    .prompt([
        {
            type: "list",
            name:"choice",
            message: "What would you like to do?",
            choices:["View all Employees", "Add an Employee","Update Employee Role", "View all Roles", "Add Role", "View all Departments", "Add Department"],
 },
])
// This function directs to the specific menu for one of the choices in the main menu
.then((optionchosen)=>{
switch(optionchosen.choice){
    case "View all Employees":
        viewEmployees();
        break;
    case "Add an Employee":
        addEmployee();
        break;
    case "Update Employee Role":
        break;
    case "View All Roles":
        viewRoles();
        break;
    case "Add Role":
        break;
    case "View all Departments":
        viewDepartments();
        break;
    case "Add Department":
        addDepartment();
        break;

}
});
};
selectMenu();
// Prompt to view employees;
const viewEmployees =(err)=>{
// db.query('SELECT id,first_name,last_name,roles_id FROM employee ')
// if (err) throw(err);
return inquirer.prompt([
    {
        type:"list",
        name:"Employee Choice",
        message:"Choose the following Employees",
        choices: ["Jim Lahey","Randy Bobandy","Hank Hill","Chester Cheetah" ]
    }
    
])
}
// Prompt to view Departments
const viewDepartments=(err)=>{
    // db.query('SELECT id, name FROM department ORDER by idA ASC;')  
    // if (err) throw(err);
    return inquirer.prompt([
        {
            type:"list",
            name:"Department Choice",
            message:"Choose the following Departments",
            choices: ["Homeland Security","Motor Vehicles","Trailer Park Supervisors","Propane Accessories","Chuck E Cheese" ]
        }


    ]);
    
}

//Prompt to view roles
const viewRoles =(err)=>{
    // db.query('SELECT id, title,salary FROM roles')
    // if(err) throw(err);
    return inquirer.prompt([
          {
            type:"list",
            name:"Employee Choice",
            message:"Choose the following Employees",
            choices: ["Park Supervisor","President","Park Mascot","Propane Handler","Secretary" ]
        }
    ])
    
}

//My attempt at adding an employee, application can't run once these are activiated
const addEmployee =()=>{
    // let empArray =[];
    // db.query('SELECT id, name * FROM department',(err,res)=>{
    //  if (err) throw(err);
    //  res.forEach((newEmp)=>{
    //     empArray.push(`${newEmp.id} ${newEmp.name}`);
    //  })
     
    // })
}
//My attempt at adding a department, application can't run once these are activiated
const addDepartment =()=>{
    // let depArray=[];

    // db.query('INSERT INTO department (deptname) VALUES (?)',(err,res)=>{
       
    //     if(err) throw(err);
    //     res.forEach((newDep)=>{
    //         depArray.push(`${newDep.name}`);
            
    //     })
    // });
}

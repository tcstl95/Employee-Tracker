const mysql = require('mysql2');
const inquirer = require("inquirer");
// const table = require('console.table');


// const db = mysql.createConnection(
//     {
//         host: "localhost",
//         user: "root",
//         password:"Stlblues#1",
//         database: "employees_db",
//     },
// );


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

const viewEmployees =(err)=>{
db.query('SELECT id,first_name,last_name,roles_id FROM employee ')
if (err) throw(err);
return inquirer.prompt([
    {
        type:"list",
        name:"Employee Choice",
        message:"Choose the following Employees",
        choices: ["Jim Lahey","Randy Bobandy","Hank Hill","Chester Cheetah" ]
    }
    
])
}
// viewEmployees();
const viewDepartments=(err)=>{
    db.query('SELECT id, name FROM department ORDER by idA ASC;')  
    if (err) throw(err);
    return inquirer.prompt([
        {
            type:"list",
            name:"Employee Choice",
            message:"Choose the following Employees",
            choices: ["Jim Lahey","Randy Bobandy","Hank Hill","Chester Cheetah" ]
        }
    ])
    
}
// viewDepartments();

const viewRoles =(err)=>{
    db.query('SELECT id, title,salary FROM roles')
    if(err) throw(err);
    return inquirer.prompt([
        {
            type:"list",
            name:"Employee Choice",
            message:"Choose the following Employees",
            choices: ["Jim Lahey","Randy Bobandy","Hank Hill","Chester Cheetah" ]
        }
    ])
}
// viewRoles();

const addEmployee =()=>{
    let empArray =[];
    db.query('SELECT id, name * FROM department',(err,res)=>{
    //  if (err) throw(err);
    //  res.forEach((newEmp)=>{
    //     empArray.push(`${newEmp.id} ${newEmp.name}`);
    //  })
     addEmployee();
    })
}

const addDepartment =()=>{
    let depArray=[];
    db.query('INSERT INTO department (deptname) VALUES (?)',(err,res)=>{
       
        if(err) throw(err);
        res.forEach((newDep)=>{
            depArray.push(`${newDep.name}`);
        })
    });
}
// addDepartment();
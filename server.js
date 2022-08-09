//requiring dependencies

const express = require('express');
const mysql = require('mysql2');
const inquirer = require("inquirer");  
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'root',
    database: 'employees_db'
  },

  console.log(`Connected to the employees_db database.`),

  firstQuestion()
 
);

// Prompts 

function firstQuestion(){

    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "Would you like to?",
            choices: [

                "Add Department",
                "Add Employee",
                "Remove Employees",
                "View Departments",
                "View Employees",
                "Add Role",
                "Quit"
            
            ]
        })
        .then(function({task}){
            switch (task.option){

                case "Add Department":
                    addDepartment();
                    break;

                case "Add Employee":
                        addEmployee();
                        break;
                case "Remove Employees":
                        removeEmployees();
                        break;
              
                 case "View Daprtments":
                        viewDepartments();
                        break;

                case "View Employees":
                        updateEmployeeRole();
                        break;
                case "Add Role":
                        addRole();
                        break;

                default:
                    quit();
            }
        });
};


//Functions

function addDepartment() {


    inquirer.prompt({
      
        type: "input",
        message: "Department Name?",
        name: "deptName"

    }).then(function(answer){



        connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            firstQuestion()
    });
    });
}

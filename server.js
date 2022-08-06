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

                "View Employees by Department",
                "Add Employee",
                "Remove Employees",
                "Update Employee Role",
                "Add Role",
                "End"
            
            ]
        })
        .then(function({task}){
            switch (task){
                case "View Employees":
                    viewEmployee();
                    break;
                case "View Employees by Department":
                    viewEmployeesbyDept();

                case "Add Employee":
                        addEmployee();
                        break;
                case "Remove Employees":
                        removeEmployees();
                        break;
                case "Update Employee Role":
                        updateEmployeeRole();
                        break;
                case "Add Role":
                        addRole();
                        break;

                case "End":
                        connection.end();
                        break;
            }
        });
};
const inquirer = require("inquirer");
const sequelize = require("./config/connection");

const Department = require("./models/Department");
const Employee = require("./models/Employee");
const Role = require("./models/Role");

const questions = [
  {
    type: "list",
    name: "task",
    message: "Select an Action",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update an Employee Role",
    ],
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
  })
  .catch((err) => {
    console.error(err);
  });

sequelize
  .sync()
  .then(() => {
    console.log("Database has been synced");
  })
  .then((err) => {
    console.log("Database has been synced");
    console.error(err);
  });

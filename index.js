const inquirer = require("inquirer");

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

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});

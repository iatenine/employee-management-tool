const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    name: "task",
    message: "Select an Action",
    choices: [
      "VIEW DEPARTMENTS",
      "VIEW ROLES",
      "VIEW EMPLOYEES",
      "ADD DEPARTMENT",
      "ADD ROLE",
      "ADD EMPLOYEE",
      "UPDATE EMPLOYEE ROLE",
      "EXIT",
    ],
  },
];

async function promptQuestions() {
  try {
    const answer = await inquirer.prompt(questions);
    const action = answer.task.split(" ")[0];
    const table = answer.task.split(" ")[1];

    switch (action) {
      case "VIEW":
        // TODO
        break;
      case "ADD":
        // TODO: 
        break;
      case "UPDATE":
        // TODO: update employee role
        break;
      default:
        // TODO: exit program
        break;
    }
  } catch (err) {
    console.error(err);
  }
}

promptQuestions();

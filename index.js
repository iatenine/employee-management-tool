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

async function addRow(data) {
  try {
    await Department.create(data);
    // await viewTable("DEPARTMENT");
    promptQuestions();
  } catch (err) {
    console.error(err);
  }
}

async function viewTable(table) {
  table = table.toUpperCase().slice(0, answer.task.split(" ")[1].length - 1);
  switch (table) {
    case "DEPARTMENT":
      try {
        const query = await Department.findAll({
          attributes: ["department_id", "name"],
        });
        console.table(query);
      } catch (err) {
        console.log(err);
      }
      break;
    case "ROLE":
      try {
        const query = await Role.findAll({
          attributes: ["role_id", "title", "salary", "department_id"],
        });
        console.table(query);
      } catch (err) {
        console.log(err);
      }
      break;
    case "EMPLOYEE":
      try {
        const query = await Employee.findAll({
          attributes: [
            "employee_id",
            "first_name",
            "last_name",
            "role_id",
            "maanger_id",
          ],
        });
        console.table(query);
      } catch (err) {
        console.log(err);
      }
      break;
    default:
      break;
  }
  promptQuestions();
}

async function promptQuestions() {
  try {
    const answer = await inquirer.prompt(questions);
    const action = answer.task.split(" ")[0];
    const table = answer.task.split(" ")[1];

    switch (action) {
      case "VIEW":
        viewTable(table);
        break;
      case "ADD":
        addRow({ name: "new_table" });
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

const sync = async () => {
  try {
    await sequelize.sync({ force: true });
    promptQuestions();
  } catch (err) {
    console.error(err);
  }
};

sync();

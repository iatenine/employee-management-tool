const inquirer = require("inquirer");
const DataManager = require("./src/DataManager");

const choiceList = [
  "VIEW DEPARTMENTS", //0
  "VIEW ROLES",
  "VIEW EMPLOYEES",
  "ADD DEPARTMENT",
  "ADD ROLE",
  "ADD EMPLOYEE",
  "UPDATE EMPLOYEE ROLE",
  "EXIT",
];
const dataManager = new DataManager();

const questions = [
  {
    type: "list",
    name: "task",
    message: "Select an Action",
    choices: choiceList,
  },
];

const deptAddQuestions = [
  {
    type: "string",
    name: "name",
    message: "Enter new department's name",
  },
];

const roleAddQuestions = [
  {
    type: "string",
    name: "title",
    message: "Enter new role's title",
  },
  {
    type: "number",
    name: "salary",
    message: "Enter role's salary",
  },
  {
    type: "number",
    name: "department_id",
    message: "Enter ID of department Role belongs to",
  },
];

async function setDeparmentData() {
  try {
    const answer = await inquirer.prompt(deptAddQuestions);
    dataManager.addDepartment(answer.name);
  } catch (err) {
    console.error(err);
  }
}

async function setRoleData() {
  try {
    const answer = await inquirer.prompt(roleAddQuestions);
    dataManager.addRole(answer.title, answer.salary, answer.department_id);
  } catch (err) {
    console.error(err);
  }
}

async function setEmployeeData() {
  // try {
  //   const answer = await inquirer.prompt(deptAddQuestions);
  //   dataManager.addDepartment(answer.name);
  // } catch (err) {
  //   console.error(err);
  // }
}

async function promptQuestions() {
  try {
    const answer = await inquirer.prompt(questions);

    switch (answer.task) {
      case choiceList[0]:
        dataManager.getDepartments();
        break;
      case choiceList[1]:
        dataManager.getRoles();
        break;
      case choiceList[2]:
        dataManager.getEmployees();
        break;
      case choiceList[3]:
        await setDeparmentData();
        break;
      case choiceList[4]:
        await setRoleData();
        break;
      case choiceList[5]:
        await setEmployeeData();
        break;
      default:
        console.log("Goodbye!");
        process.exit(0);
    }
    promptQuestions();
  } catch (err) {
    if (err) throw new Error(err);
  }
}

promptQuestions();

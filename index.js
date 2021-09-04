const inquirer = require("inquirer");
const cTable = require("console.table");
const wait = require("wait-console-input");
const DataManager = require("./src/DataManager");
const QuestionManager = require("./src/QuestionManager");

const dataManager = new DataManager();
const qManager = new QuestionManager();
cTable.getTable();

async function promptQuestions() {
  try {
    const answer = await inquirer.prompt(qManager.questions);
    let res;

    switch (answer.task) {
      case qManager.choiceList[0]:
        res = await dataManager.getDepartments();
        break;
      case qManager.choiceList[1]:
        res = await dataManager.getRoles();
        break;
      case qManager.choiceList[2]:
        res = await dataManager.getEmployees();
        break;
      case qManager.choiceList[3]:
        res = await setDeparmentData();
        break;
      case qManager.choiceList[4]:
        res = await setRoleData();
        break;
      case qManager.choiceList[5]:
        res = await setEmployeeData();
        break;
      case qManager.choiceList[6]:
        res = await updateEmployeeRole();
        break;
      default:
        console.log("Goodbye!");
        process.exit(0);
    }
    displayMessage(res);
    promptQuestions();
  } catch (err) {
    if (err) throw new Error(err);
  }
}

async function setDeparmentData() {
  try {
    const answer = await inquirer.prompt(qManager.deptAddQuestions);
    dataManager.addDepartment(answer.name);
  } catch (err) {
    console.error(err);
  }
}

async function setRoleData() {
  try {
    const answer = await inquirer.prompt(qManager.roleAddQuestions);
    dataManager.addRole(answer.title, answer.salary, answer.department_id);
  } catch (err) {
    console.error(err);
  }
}

async function setEmployeeData() {
  try {
    const answer = await inquirer.prompt(qManager.employeeAddQuestions);
    dataManager.addEmp;
    if (!answer.manager_id) console.table(answer);
  } catch (err) {
    console.error(err);
  }
}

async function updateEmployeeRole() {
  try {
    const answer = await inquirer.prompt(qManager.updateRoleQuestions);
    dataManager.updateEmployeeRole(answer.employee_id, answer.new_role_id);
  } catch (err) {
    console.error(err);
  }
}

async function displayMessage(message) {
  console.table(message);
  wait.readChar("Press any key to return to menu");
}

promptQuestions();

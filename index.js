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
    const task = await inquirer.prompt(qManager.questions);
    let res;
    let answer;

    switch (task.task) {
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
        answer = await inquirer.prompt(qManager.deptAddQuestions);
        res = await dataManager.addDepartment(answer.name);
        break;
      case qManager.choiceList[4]:
        answer = await inquirer.prompt(qManager.roleAddQuestions);
        res = await dataManager.addRole(
          answer.title,
          answer.salary,
          answer.department_id
        );
        break;
      case qManager.choiceList[5]:
        answer = await inquirer.prompt(qManager.employeeAddQuestions);
        res = await dataManager.addEmployee();
        break;
      case qManager.choiceList[6]:
        answer = await inquirer.prompt(qManager.updateRoleQuestions);
        res = await dataManager.updateEmployeeRole(
          answer.employee_id,
          answer.new_role_id
        );
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

async function displayMessage(message) {
  console.table(message);
  wait.readChar("Press any key to return to menu");
}

promptQuestions();

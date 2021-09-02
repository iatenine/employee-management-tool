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

const employeeAddQuestions = [
  {
    type: "string",
    name: "first_name",
    message: "Enter new employee's first name",
  },
  {
    type: "string",
    name: "last_name",
    message: "Enter new employee's last name",
  },
  {
    type: "number",
    name: "role_id",
    message: "Enter associated role's ID",
    validate: (entry) => {
      if (!isNaN(entry)) return true;
      return "Entry must be a valid number";
    },
  },
  {
    type: "number",
    name: "manager_id",
    message: "Enter manager's ID (skip if not applicable)",
    default: null,
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
  try {
    const answer = await inquirer.prompt(employeeAddQuestions);
    dataManager.addEmp
    if (!answer.manager_id) console.table(answer);
  } catch (err) {
    console.error(err);
  }
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
      case choiceList[6]:
        console.log("Functionality coming soon!");
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

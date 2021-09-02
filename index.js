const inquirer = require("inquirer");
const DataManager = require("./src/DataManager");

const choiceList = ["VIEW DEPARTMENTS", "ADD DEPARTMENT", "EXIT"];
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
    message: "What is the name of the new department?",
  },
];

async function specifyName() {
  try {
    const answer = await inquirer.prompt(deptAddQuestions);
    dataManager.addDepartment(answer.name);
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
        await specifyName();
        break;
      default:
        console.log("Goodbye!");
        process.exit(0);
    }
    promptQuestions();
  } catch (err) {
    if (err) throw new Error(err);
    console.log("why are we here?");
  }
}

promptQuestions();

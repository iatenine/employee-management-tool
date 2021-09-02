const ConsoleTable = require("console.table");
const connection = require("../config/connection");

class DataManager {
  constructor() {}

  getDepartments() {
    connection.execute("SELECT * FROM departments", (err, result) => {
      if (err) console.error(err);
      console.table(result);
    });
  }

  getRoles() {
    connection.execute("SELECT * FROM roles", (err, result) => {
      if (err) console.error(err);
      console.table(result);
    });
  }

  getEmployees() {
    connection.execute("SELECT * FROM employees", (err, result) => {
      if (err) console.error(err);
      console.table(result);
    });
  }

  addDepartment(name) {
    connection.execute(
      `INSERT INTO departments (name) values ('${name}')`,
      (err, result) => {
        if (err) throw new Error(err);
        console.log("Department Added!");
        console.log(`${result}`);
      }
    );
  }

  addRole(title, salary, department_id) {
    connection.execute(
      `INSERT INTO departments (title, salary, department_id) values ('${tille}', '${salary}', '${department_id}')`,
      (err, result) => {
        if (err) throw new Error(err);
        console.log("Department Added!");
        console.log(`${result}`);
      }
    );
  }
}

module.exports = DataManager;

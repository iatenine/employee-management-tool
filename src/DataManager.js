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
    connection.execute(
      `SELECT role_id, title, salary, name FROM company_db.roles
INNER JOIN company_db.departments
ON company_db.roles.department_id = company_db.departments.department_id;`,
      (err, result) => {
        if (err) console.error(err);
        console.table(result);
      }
    );
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
        console.table(`${result}`);
      }
    );
  }

  addRole(title, salary, department_id) {
    connection.execute(
      `INSERT INTO roles (title, salary, department_id) values ('${title}', '${salary}', '${department_id}')`,
      (err, result) => {
        if (err) throw new Error(err);
        console.log("Role Added!");
        console.table(`${result}`);
      }
    );
  }

  addEmployee(first_name, last_name, role_id, manager_id) {
    if (!manager_id)
      connection.execute(
        `INSERT INTO employees (first_name, last_name, role_id) values ('${first_name}', '${last_name}', '${role_id}')`,
        (err, result) => {
          if (err) throw new Error(err);
          console.log("Employee Added!");
          console.table(`${result}`);
        }
      );
    else
      connection.execute(
        `INSERT INTO employees (first_name, last_name, role_id, manager_id) values ('${first_name}', '${last_name}', '${role_id}', '${manager_id}')`,
        (err, result) => {
          if (err) throw new Error(err);
          console.log("Employee Added!");
          console.table(`${result}`);
        }
      );
  }
}

module.exports = DataManager;

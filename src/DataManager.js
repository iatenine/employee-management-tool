const ConsoleTable = require("console.table");
const connection = require("../config/connection");

const queryList = {
  selectQueries: {
    departmentQuery: "SELECT * FROM departments",
    roleQuery: `SELECT role_id, title, salary, name FROM company_db.roles
INNER JOIN company_db.departments
ON company_db.roles.department_id = company_db.departments.department_id;`,
    employeeQuery: "SELECT * FROM employees",
  },
};

class DataManager {
  constructor() {}

  getDepartments() {
    this.executeSql(queryList.selectQueries.departmentQuery);
  }

  getRoles() {
    this.executeSql(queryList.selectQueries.roleQuery);
  }

  getEmployees() {
    this.executeSql(queryList.selectQueries.employeeQuery);
  }

  addDepartment(name) {
    const query = `INSERT INTO departments (name) values ('${name}')`;
    this.executeSql(query, "Department Added!");
  }

  addRole(title, salary, department_id) {
    const query = `INSERT INTO roles (title, salary, department_id) values ('${title}', '${salary}', '${department_id}')`;
    this.executeSql(query);
  }

  addEmployee(first_name, last_name, role_id, manager_id) {
    const query = manager_id
      ? `INSERT INTO employees (first_name, last_name, role_id, manager_id) values ('${first_name}', '${last_name}', '${role_id}', '${manager_id}')`
      : `INSERT INTO employees (first_name, last_name, role_id) values ('${first_name}', '${last_name}', '${role_id}')`;
    this.executeSql(query, "Employee Added");
  }

  updateEmployeeRole(employee_id, new_role_id) {
    const query = `UPDATE employees
    SET 
    role_id = ${new_role_id}
    WHERE
    employee_id = ${employee_id};`;
    this.executeSql(query, "Employee role updated!");
  }

  executeSql(command, successMessage) {
    connection.execute(command, (err, result) => {
      if (err) throw new Error(err);
      if (successMessage) {
        console.log(successMessage);
      } else console.table(result);
    });
  }
}

module.exports = DataManager;

const connection = require("../config/connection");

class DataManager {
  constructor() {}

  getDepartments() {
    connection.execute("SELECT * FROM departments", (err, result) => {
      if (err) console.error(err);
      console.log("Result: ", result);
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
}

module.exports = DataManager;

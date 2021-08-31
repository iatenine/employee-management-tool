const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Employee extends Model {}

Employee.init(
  {
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: "roles",
        key: "role_id",
      },
    },
    managerId: {
      type: DataTypes.INTEGER,
      references: {
        model: "employees",
        key: "employee_id",
      },
    },
  },
  {
    sequelize,
    underscored: true,
  }
);

module.exports = Employee;

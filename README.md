# Employee Management Tool

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Table of Contents

[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)  
[License](#license)

# Description

Employee Management Tool is a simple CLI Application that allows a user to view and add employees, departments
and roles within the context of a MySql database. Departments are the simplest entities, with only a name and id
while belonging to no other objects. A role defines a specific job within the organization and must be linked
to a department. Employees will be linked to a role and may be linked to another employee if they report to
a manager

Operations are currently limited as you may view and add to any category but not delete nor update any fields
with the sole exception of updating an employee's role. A workaround to this may be to create an "inactive"
department where all employees can be reassigned if deletion would otherwise make sense

# Installation

Installation instructions are as follows:

- Install MySql if not already on computer
- Open your terminal and navigate to an empty directory
- Clone the repo
- Run `npm i`
- Create a file in the root directory named .env
- Provide the following credentials relevant to your MySql configuration:

```
DB_USER=<username for your MySql instance>
DB_PASSWORD=<password associated with username>
DB_NAME=<name of the db you wish to use>
DB_HOST=<database host name, usually localhost>
```

- Run `npm run start`

# Usage

Project can be used to track, organize and update employees within an organization

# Contributing

To contribute to this project:

- Find or open an issue related to a bug or desired feature
- Create a fork of the repo
- Make changes within the fork to address the issue
- Create a PR if you feel improvements have been made over the current iteration

# Questions

[Maintainer](https://github.com/iatenine)  
For further questions, direct emails [here](mailto:FullJackDevelopment@gmail.com)

# License

This project is covered under [The MIT License](https://opensource.org/licenses/MIT)

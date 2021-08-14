const generateHTML = require("./source/HTMLgenerator");

// Profile Generations
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Required Modules
const fs = require("fs");
const inquirer = require("inquirer");

// team array
const teamArray = [];

// start of manager prompts
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter team manager's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter team manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter Team Manager's ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter Team Manager's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter Team Manager's email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter Team Manager's office number",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter an office number!");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      console.log(Manager);
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  console.log(`
    Employee successfully added`);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Select Employee's role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Enter Employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an Employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the Employee's ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the Employee's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the Employee's email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter Employee's github username.",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's github username!");
          }
        },
      },
      {
        type: "input",
        name: "university",
        message: "Enter the Intern's University",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Intern's University!");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      // data for employee types

      let { name, id, email, role, github, university, confirmAddEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, university);

        console.log(employee);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Team profile successfully generated!");
    }
  });
};

addManager()
  .then(addEmployee)
  .then((teamArray) => {
    return generateHTML(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });

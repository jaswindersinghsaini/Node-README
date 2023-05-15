// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please Enter Title of your Project",
  },
  {
    type: "input",
    name: "description",
    message: "Please Enter Project Description",
  },
  {
    type: "input",
    name: "installation",
    message: "Please Enter Installation Requirements",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter how this can be used?",
  },
  {
    type: 'list',
    name: "license",
    message: "Please choose a License from list",
    choices: [
      "MIT License",
      "GNU Lesser General Public License v3.0",
      "Mozilla Public License 2.0",
      "GNU Affero General Public License v3.0",
      "The Unlicense",
      "Apache License 2.0",
      "GNU General Public License v3.0",
    ],
  },
  {
    type: "input",
    name: "contributors",
    message: "Please Enter Contributors",
  },
  {
    type: "input",
    name: "tests",
    message: "Please Enter Tests if any?",
  },
  {
    type: "input",
    name: "username",
    message: "Please Enter your github username",
  },
  {
    type: "input",
    name: "email",
    message: "Please Enter your email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) =>
    error ? console.log(error) : console.log("Success!!")
  );
}

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const markdownText = generateMarkdown(response);
    writeToFile("Sample.md", markdownText);
  });
}

// // Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: "What is your name?",
      name: 'username',
    },
    {
      type: 'input',
      message:  "What languages do you know?",
      name: 'languages',
    },
    {
      type: 'input',
      message: "What is your preferred method of communication?",
      name: 'preffered',
    },
  ])
  .then((response) =>
        fs.writeFile("README2.md", readMeGenerator(response), err => console.log(err))
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
function readMeGenerator(response) {
    return `## Name
${response.username}
    
## Known Languages
${response.languages}
    
## Preffered method of Communication
${response.preffered}`;
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      message: "Please enter a Title:",
      name: 'title',
    },
    {
      type: 'input',
      message:  "Please enter installation instructions:",
      name: 'installation',
    },
    {
      type: 'input',
      message:  "Please enter usage information:",
      name: 'usage',
    },
    {
      type: 'input',
      message:  "Please enter contribution guidelines:",
      name: 'guidelines',
    },
    {
      type: 'input',
      message: "Please enter test instructions:",
      name: 'test',
    },
    {
      type: 'input',
      message: "What is your github username?",
      name: 'username',
    },
    {
      type: 'input',
      message: "What is your email?",
      name: 'email',
    },
  ])
  .then((response) =>
        fs.writeFile("README2.md", readMeGenerator(response), err => console.log(err))
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
function readMeGenerator(response) {
    return `#${response.title}

##Table of Contents
[Description](#Description)  
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

##Description
${response.description}


##Installation
${response.installation}

##Usage
${response.usage}

##License
${response.license}

##Contributing
${response.guidelines}

##Tests
${response.tests}

##Questions
Link to github: [Click Here](https://github.com/${response.username})
Please submit any additional questions you may have in an email to ${response.email} 
`   
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


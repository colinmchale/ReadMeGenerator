// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
return inquirer.prompt([
    {
      type: 'input',
      message: "Please enter a Title:",
      name: 'title',
    },
    {
      type: 'input',
      message:  "Please provide a description of the application:",
      name: 'description',
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
      type: 'list',
      message:  "Please select the application's license type:",
      choices: ['Apache 2.0', 'GPL v3', 'MPL 2.0', 'Unlicense', 'WTFPL', 'none'],
      name: 'license',
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
};

// TODO: Create a function to write README file
function readMeGenerator(response) {
    return `# ${response.title}

## Table of Contents  
[Description](#Description)   
[Installation](#Installation)  
[Usage](#Usage)  
[License](#License)  
[Contributing](#Contributing)  
[Tests](#Tests)  
[Questions](#Questions)  

## Description  
${response.description}

## Installation  
${response.installation}

## Usage  
${response.usage}

## License  
${response.license}

## Contributing  
${response.guidelines}

## Tests  
${response.tests}

## Questions  
Link to github: [Click Here](https://github.com/${response.username})  
Please submit any additional questions you may have in an email to ${response.email}
`   
};

// TODO: Create a function to initialize app
function init() {
  questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((response) => fs.writeFileSync("README.md", readMeGenerator(response)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();


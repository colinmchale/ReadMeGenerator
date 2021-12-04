// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
return inquirer.prompt([
    {
      type: 'input',
      message: "Please enter a Title:",
      name: 'title',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your project title!');
            return false; 
        }
      }
    },
    {
      type: 'input',
      message:  "What was your motivation for the application?",
      name: 'motivation',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter the reason for creating this application!');
            return false; 
        }
      }
    },
    {
      type: 'input',
      message:  "Why did you build this project?",
      name: 'why',
    },
    {
      type: 'input',
      message:  "What problem does it solve?",
      name: 'solution',
    },
    {
      type: 'input',
      message:  "What did you learn?",
      name: 'lesson',
    },
    {
      type: 'input',
      message:  "Please enter steps required to install project:",
      name: 'installation',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter installation steps!');
            return false; 
        }
      }
    },
    {
      type: 'input',
      message:  "Please enter usage information:",
      name: 'usage',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter usage info!');
            return false; 
        }
      }
    },
    {
      type: 'list',
      message:  "Please select the application's license type:",
      choices: ['Apache 2.0', 'GPL v3', 'MPL 2.0', 'Unlicense', 'WTFPL', 'none'],
      name: 'license',
    },
    {
      type: 'input',
      message:  "Please enter guidelines for how other programmers can contribute:",
      name: 'guidelines',
    },
    {
      type: 'input',
      message: "Please enter test instructions for how to run application:",
      name: 'test',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter instrcutions!');
            return false; 
        }
      }
    },
    {
      type: 'input',
      message: "What is your Github username?",
      name: 'username',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false; 
        }
      }
    },
    {
      type: 'input',
      message: "What is your email?",
      name: 'email',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your email!');
            return false; 
        }
      }
    },
  ])
};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("ExampleREADME.md", data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Your README.md file has been generated")
    });
}


// TODO: Create a function to initialize app
function init() {

  questions()
// Get the answers from user 
.then(answers => {
  console.log("answers: " + answers)
    return generateMarkdown(answers);
})
// Use data to display on the ReadMe 
.then(data => {
  console.log("data: " + data)
    return writeToFile(data);
})
// Catch errors
.catch(err => {
    console.log(err)
})


  // questions()
  //   // Use writeFileSync method to use promises instead of a callback function
  //   .then((data) => fs.writeFileSync("ExampleREADME.md", generateMarkdown))
  //   .then(() => console.log('Successfully wrote to README.md'))
  //   .catch((err) => console.error(err));
    
}

// Function call to initialize app
init();


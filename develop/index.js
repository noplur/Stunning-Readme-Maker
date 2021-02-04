// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const writeToFile = require('./develop/page-template');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your project title!');
              return false;
            }
          }
},
{
    type: 'input',
    name: 'name',
    message: 'Please enter your name? (Required)',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
},
{
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
},
{
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
},
{
        type: 'input',
        name: 'usage',
        message: 'Please provide examples and instructions for use'
},
{
        type: 'input',
        name: 'contribution',
        message: 'Please enter your contribution guidelines:'
},
{
        type: 'input',
        name: 'tests',
        message: 'Explain how to run the automated tests for this system:'
},
{
        type: 'input',
        name: 'license',
        message: 'Does this application have a license?'
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
},
{
    type: 'input',
    name: 'githublink',
    message: 'Enter your GitHub profile link (Required)',
    validate: githubLink => {
      if (githubLink) {
        return true;
      } else {
        console.log('Please enter your GitHub profile link!');
        return false;
      }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address (Required)',
    validate: githubLink => {
      if (githubLink) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    }
}
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
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
    validate: emailInput => {
      if (emailInput) {
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
const writeToFile(fileName, data) => {
    return `
    # ${title}
    ## by ${name}
    ### Table of Contents
    ##### 1. [ Description. ](#desc)
    ##### 2. [ Installation. ](#install)
    ##### 3. [ Usage. ](#usage)
    ##### 4. [ Description. ](#contr) 
    ##### 5. [ Tests. ](#tests)
    ##### 6. [ Licenses. ](#license) 
    ##### 7. [ GitHub Repository Link. ](#githublink) 
    ##### 8. [ Website Link. ](#weblink)
    ##### 9. [ Questions and Contact. ](#contact)
    ### <a name="desc"</a> 1. Description
    #### ${description}
    ### <a name="install"</a> 2. Installation
    #### The steps required to install the project include: ${installation}
    ### <a name="usage"</a> 3. Usage
    #### Examples and instructions for use include: ${usage}
    ### <a name="contr"</a> 4. Contribution
    #### Contribution guidelines include: ${contribution}
    ### <a name="tests"</a> 5. Tests
    #### Automated tests for this system can be run by: ${tests}
    ### <a name="license"</a> 6. Licenses
    #### This application includes the following license(s): ${license}
    ### <a name="githublink"</a> 7. GitHub Link
    #### The ${github} GitHub repository for ${title} can be viewed here: ${githublink}
    ### <a name="weblink"</a> 8. Website Link
    #### The link to the website of ${title} can be viewed here: ${description}
    ### <a name="contact"</a> 9. Questions and Contact
    ### <a name="install"</a>If you have additional questions, please email ${name} at: ${email}  
    `;
};

// TODO: Create a function to initialize app
init()
    .then(writeToFile) => {
        const pageMD = generatePage(readmeData);

        fs.writeFile('./README.md'), pageMD, err => {
            if (err) throw new Error(err);

            console.log('Page created! Check out READEME.md in this directory to see it!');
          };
        }

// Function call to initialize app
init();
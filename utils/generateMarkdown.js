// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)` 
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `##### 9. [ Licenses. ](#license)` 
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `### <a name="license"</a> 9. Licenses
    #### This application includes the following license(s): ${license}` 
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## by ${data.userName}
### Table of Contents
##### 1. [ Description. ](#desc)
##### 2. [ Installation. ](#install)
##### 3. [ Usage. ](#usage)
##### 4. [ Contributions. ](#contr) 
##### 5. [ Tests. ](#tests)
##### 6. [ GitHub Repository Link. ](#githublink) 
##### 7. [ Website Link. ](#weblink)
##### 8. [ Questions and Contact. ](#contact)
${renderLicenseLink(license)}
### <a name="desc"</a> 1. Description
#### ${data.description}
### <a name="install"</a> 2. Installation
#### The steps required to install the project include: ${data.installation}
### <a name="usage"</a> 3. Usage
#### Examples and instructions for use include: ${data.usage}
### <a name="contr"</a> 4. Contribution
#### Contribution guidelines include: ${data.contribution}
### <a name="tests"</a> 5. Tests
#### Automated tests for this system can be run by: ${data.tests}
### <a name="githublink"</a> 7. GitHub Link
#### The ${data.github} GitHub repository for ${data.title} can be viewed here: ${data.githublink}
### <a name="weblink"</a> 8. Website Link
#### The link to the website of ${data.title} can be viewed here: ${data.description}
### <a name="contact"</a> 9. Questions and Contact
### <a name="install"</a>If you have additional questions, please email ${data.userName} at: ${data.email}  
${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;

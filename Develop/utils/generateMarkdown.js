// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license) {
    return `(https://img.shields.io/badge/license-${data.license}-green.svg)`
  }
  // If there is no license, return an empty string
  else {
    return '';
  }
}


// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license) {
    return `[License](#license)`
  } 
  // If there is no license, return an empty string
  else {
    return '';
  }
}


// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License
    This project is protected under the ${license} license.`
  } 
  // If there is no license, return an empty string
  else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // add license badge at the page top
  // add the link function in the table of contents
  // add the section function in the page
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseLink(data.license)}
  * [Contribution Guidelines](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installInstructions}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contribution Guidelines 
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  My Github: https://github.com/${data.userName} 
  Email me at: ${data.email}
`;
}


// use this to include in the packages portion of the index.js
module.exports = generateMarkdown;

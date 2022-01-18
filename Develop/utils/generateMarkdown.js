// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // add license badge at the page top
  return `# ${data.title}
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution Guidelines](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installInstructions}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
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

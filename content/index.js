// Include packages needed for this application ------------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input ------------------------------------------------
const questions = [
    // #TITLE
    {
        type: 'input',
        message: 'What is the project title? ',
        name: 'title',
    },

    // ##DESCRIPTION
    {
        type: 'input',
        message: 'Please include a detailed description.',
        name: 'description',
    },

    // ##INSTALATION 
    {
        type: 'input',
        message: 'What are the installation instructions? ',
        name: 'installInstructions',
    },

    // ##USAGE
    {
        type: 'input',
        message: 'What is the best way to use this project/application?',
        name: 'usage',
    },

    // ## CONTRIBUTION GUIDELINES
    {
        type: 'input',
        message: 'What sort of contribution guidlines do you wish to include? ',
        name: 'contribution',
    },

    // ##TESTING
    {
        type: 'input',
        message: 'How would one test the project application? ',
        name: 'test',
    },

    // ##LICENSE 
    // TODO: include list of licenses
    {
        type: 'list',
        message: 'Under what license is this project? ',
        name: 'license',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense', 'BSD 2-clause'],
    },

    // ##QUESTIONS | GITHUB
    {
        type: 'input',
        message: 'What is your GitHub username? ',
        name: 'userName',
    },

    // ##QUESTIONS | EMAIL
    {
        type: 'input',
        message: 'What is your email address? ',
        name: 'email',
    },
];


// TODO: Create a function to write README file -----------------------------------------------------
// fileName is replaced with README.md, which is pushed in the init function
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        // ternary operator to check for errors
        err ? console.log(err) : console.log('README file created!') 
    });
}


// TODO: Create a function to initialize app --------------------------------------------------------
function init() {
    // use the questions array in the inquerer function
    inquirer.prompt(questions)
        .then((data) => {
            // push data from answers to the included generate page
            return generateMarkdown(data)
        })
        .then((data) => {
            // push file name and data to the writeToFile function
            writeToFile(data)
        })
        .catch((err) => console.log(err));
};


// Function call to initialize app ------------------------------------------------------------------
init();

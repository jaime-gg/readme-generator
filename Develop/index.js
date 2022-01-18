// Include packages needed for this application ------------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input -------------------------------------------------
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

    // ##CONTRIBUTIONS
    {
        type: 'input',
        message: 'Who/What contrubuted to the developement of this project? ',
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


// TODO: Create a function to write README file ------------------------------------------------------
function writeToFile(fileName, data) {

}


// TODO: Create a function to initialize app ---------------------------------------------------------
function init() {

}


// Function call to initialize app -------------------------------------------------------------------
init();

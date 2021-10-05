// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        message: 'Please Provide a Description of Your Project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Please Enter the Type of License used, if not applicable, choose "skip"',
        name: 'license',
        choices: ['']
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err){
            console.log(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
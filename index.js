// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
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
        choices: ['MIT', 'GNU', 'No License']
    }
];

// TODO: Create a function to write README file
const write = function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err){
            console.log(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
// Prompt the user with questions and save to constant
    inquirer.prompt(questions)
    .then(function(data){
//call the generateMarkdown file implementing the data gotten from prompts
   const MD = generateMarkDown(data);
//write to a new README using write function.
   write('READMEnew.md', MD);
})
   
}

// Function call to initialize app
init();
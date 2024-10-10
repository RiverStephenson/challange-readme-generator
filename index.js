import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown';


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short descirption about why you made your project, what it does, and how it can help."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples of how to use or navigate your project"
    },
    {
        type: "input",
        name: "credits",
        message: "Anyone or anything to credit?"
    },
    {
        type: "input",
        name: "license",
        message: "Provide the license used for your project."
    },
    {
        type: "input",
        name: "badges",
        message: "Provide the badges used for your project"
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateMarkdown(data))
    err ? console.error(err) : console.log('success');
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions);
    .then()
    // unfinished
}

// Function call to initialize app
init();

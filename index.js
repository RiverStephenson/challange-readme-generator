// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';


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
        type: 'list',
        name: "license",
        message: "Provide the license used for your project.",
        choices: ['Apache', 'Boost', 'Eclipse']
    },
];
// These are all the questions that will be prompted to the user


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data),
    err => err ? console.error(err) : console.log('success'))
}
// This function creates a markdown file and uses the provided data the create the file.

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            writeToFile('genREADME.md', data);
        })
};
// This function prompts the user the questions and stores the responses

// Function call to initialize app
init();

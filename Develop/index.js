
const markdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Please enter the table of contents.",
        name: "contents",
    },
    {
        type: "input",
        message: "Please enter your installation instructions.",
        name: "install",
    },
    {
        type: "input",
        message: "Please enter the usage information.",
        name: "usage",
    },
    {
        type: "list",
        message: "Please input your license information.",
        name: "license",
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "NONE"],
    },
    {
        type: "input",
        message: "Please enter your contribution guidelines.",
        name: "contributions",
    },
    {
        type: "input",
        message: "Please enter your testing information",
        name: "tests",
    },
    {
        type: "input",
        message: "Please enter your questions.",
        name: "question",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data)
}


function init() {
    inquirer.prompt(questions)
    .then((userInput) => {
        writeToFile("README.md", markdown(userInput))
    })
}

// Function call to initialize app
init();

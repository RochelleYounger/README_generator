// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "confirm",
        name: "licenseConfirm",
        message: "Would you like to include a license?",
        default: false
    },
    {
        type: "rawlist",
        name: "license",
        message: "Choose a license to include.",
        choices: ["MIT", "GNU GPLE v2", "Apache 2.0", "GNU GPL v3", "BSD 3-clause", "ISC", "Perl"],
        when: ({ licenseConfirm }) => {
            if (licenseConfirm) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "list",
        name: "color",
        message: "Choose a color for your license badge.",
        choices: ["lightgrey", "red", "orange", "yellow", "yellowgreen", "green", "brightgreen", "blue", "lightblue", "blueviolet", "violet", "purple", "pink", "hotpink"],
        when: ({ licenseConfirm }) => {
            if (licenseConfirm) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the instructions for installation. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter information for usage of application. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contribution guidelines. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "testConfirm",
        message: "Would you like to include test instructions?",
        default: false
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter test instructions. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        },
        when: ({ testConfirm }) => {
            if (testConfirm) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github username. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Field cannot be left empty.");
                return false;
            }
        }
    }
];

// prompts user for info
const userPrompt = () => {
    return inquirer.prompt(questions);
};
// logging data
const logData = data => console.log(data);


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./dist/README.md", data, err => {
        if (err) throw err;
        console.log('Success!');
    });
};

// TODO: Create a function to initialize app
function init() {
    userPrompt().then(data => generateMarkdown(data)).then(data => writeToFile(data));
}

// Function call to initialize app
init();

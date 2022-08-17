const Manager = require("./Lib/Manager");
const Engineer = require("./Lib/Engineer");
const Intern = require("./Lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputDir = path.resolve(__dirname, "dist");
const outputPath = path.join(outputDir, "team.html");

const render = require("./Lib/Html");

// Array to store team info
const teamProfile = [];

// Function to get user input
function teamProfileBuilder() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Hello team manager, please enter your name"
            },
            {
                type: "input",
                name: "id",
                message: "Please enter your employee ID."
            },
            {
                type: "input",
                name: "email",
                message: "Please enter your business email."
            },
            {
                type: "input",
                name: "officePhoneNumber",
                message: "Please enter your office phone number."
            }
        ])
        .then(data => {
            let manager = new Manager(data.name, data.id, data.email, data.officePhoneNumber);
            teamProfile.push(manager);
            addMember();
        })
}

// Function to ask user if they want to add a member or if they are done.
function addMember() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "member",
                message: "Please select another member to add or select complete team.",
                choices: ["Engineer", "Intern", "Team Complete"]
            }
        ])
        .then(choice => {
            if (choice.member === "Engineer") {
                addEngineer();
            }
            else if (choice.member === "Intern") {
                addIntern();
            }
            else {
                completeProfile();
            }
        })
}

// Function to render info to html file
function completeProfile() {
    fs.writeFileSync(outputPath, render(teamProfile));
    console.log("Congratulations the team profile is complete!");
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the engineer's name."
            },
            {
                type: "input",
                name: "id",
                message: "Please enter engineer's employee ID."
            },
            {
                type: "input",
                name: "email",
                message: "Please enter engineer's business email."
            },
            {
                type: "input",
                name: "github",
                message: "Please enter engineer's GitHub username."
            }
        ])
        .then(data => {
            let engineer = new Engineer(data.name, data.id, data.email, data.github);
            teamProfile.push(engineer);
            addMember();
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the intern's name."
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the intern's employee ID."
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the intern's business email."
            },
            {
                type: "input",
                name: "school",
                message: "Please enter intern's university or boot camp's name."
            }
        ])
        .then(data => {
            let intern = new Intern(data.name, data.id, data.email, data.school);
            teamProfile.push(intern);
            addMember();
        })
}

teamProfileBuilder();

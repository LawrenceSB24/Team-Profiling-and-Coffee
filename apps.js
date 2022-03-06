// Variable that retrieves the Inquirer package
const inquirer = require('inquirer');

// Variables that gather the class packages from the library folder
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Variable that retrieves the js file for generating the team profile webpage
const siteGenerate = require('./source/coffee.js');

// Variable that retrieves the fs package for writing to the team profile HTML file based on the user's input
const fs = require('fs');

// Array for storing all information about the team
const teamMates = [];

// Arrow function that initiates the team information prompts
const managerCoffee = () => {

    // First prompt array for the information about the team manager
    return inquirer.prompt([
        // Prompt for manager's name. Stored in an object.
        {
            type: 'input',
            name: 'name',
            message: 'What is your name(?) [Required]: ',
            // Validation conditions for the name provided. If name is provided, then input is stored.
            validate: nameInput => {
                if (nameInput) {
                    return true;
                    // If prompt is not answered, then user is inquired to answer the prompt again
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        // Prompt for manager's employee id. Stored in an object.
        {
            type: 'input',
            name: 'employId',
            message: 'What is your employee Id(?) [Required]: ',
            // Validation conditions for manager's employee id. Same as name conditions
            validate: employIdInput => {
                if (employIdInput) {
                    return true;
                } else {
                    console.log('Please enter your id!');
                    return false;
                }
            }
        },
        // Prompt for manager's email address. Stored in an object.
        {
            type: 'input',
            name: 'email',
            message: 'What is your email(?) [Required]: ',
            // Validation conditions for manager's email. Same as name conditions
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        // Prompt for manager's office ID number. Stored in an object.
        {
            type: 'input',
            name: 'officeId',
            message: 'What is your office ID (Your office number)(?) [Required]: ',
            // Validation conditions for manager's office ID. Same as name conditions
            validate: officeIdInput => {
                if (officeIdInput) {
                    return true;
                } else {
                    console.log('Please enter your office ID!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        // When all prompts are answered, variable is created that stores answers.
        const manager = new Manager(answers.name, answers.employId, answers.email, answers.officeId);
        // Variable is pushed into teamMates array
        teamMates.push(manager);
        // teamCoffee function called for next prompts
        teamCoffee();
    })
};

// Arrow function containing choices for adding different team members and inputing info about different members
const teamCoffee = () => {
    return inquirer.prompt([
        // Object containing choices for adding engineer, adding interns, or finiching the team formation
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which member you would like to add to your team: ',
            choices: [
                'Engineer',
                'Intern',
                'All set.'
            ]
        }])
        // switch cases for different user choice
        .then(userChoice => {
            switch (userChoice.menu) {
                // Enginner case, which begins prompt function for information on engineer
                case "Engineer":
                    promptEngineer();
                    // Once information for all questions inputed, function stops
                    break;
                // Intern case, which begins prompt function for information on intern
                case "Intern":
                    promptIntern();
                    // Once information for all questions inputed, function stops
                    break;
                // If user is satisfied and 'All Set' is selected, then teamBuilt function is run
                default:
                    teamBuilt();
            }
        });
};

// Prompt function for questions about the engineer.
const promptEngineer = () => {
    console.log(`
    =================
    Add an Engineer
    =================`);

    // Second prompt array for the information about the team engineer
    return inquirer.prompt([
        // Prompt for engineer's name. Stored in an object.
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer(?) [Required]: ',
            // Validation conditions for the name provided.
            validate: engNameInput => {
                if (engNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer!');
                    return false;
                }
            }
        },
        // Prompt for engineer's epmloyee ID. Stored in an object.
        {
            type: 'input',
            name: 'employId',
            message: 'What is your employee Id(?) [Required]: ',
            // Validation conditions for the employee ID provided.
            validate: employIdInput => {
                if (employIdInput) {
                    return true;
                } else {
                    console.log('Please enter your id!');
                    return false;
                }
            }
        },
        // Prompt for engineer's email address. Stored in an object.
        {
            type: 'input',
            name: 'email',
            message: 'What is your email(?) [Required]: ',
            // Validation conditions for the email address provided.
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        // Prompt for engineer's GitHub username. Stored in an object.
        {
            type: 'input',
            name: 'gitName',
            message: 'What is your GitHub name(?) [Required]: ',
            // Validation conditions for the GitHub username provided.
            validate: gitNameInput => {
                if (gitNameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub name!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        // When all prompts are answered, variable is created that stores answers.
        const engineer = new Engineer(answers.name, answers.employId, answers.email, answers.gitName);
        // Variable is pushed into teamMates array
        teamMates.push(engineer);
        // teamCoffee function called for next prompt
        teamCoffee();
    })
};

// Prompt function for questions about the intern.
const promptIntern = () => {
    console.log(`
    =================
    Add an Intern
    =================`);

    // Second prompt array for the information about the intern
    return inquirer.prompt([
        // Prompt for intern's name. Stored in an object.
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern(?) [Required]: ',
            // Validation conditions for the name provided.
            validate: engNameInput => {
                if (engNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
                }
            }
        },
        // Prompt for intern's epmloyee ID. Stored in an object.
        {
            type: 'input',
            name: 'employId',
            message: 'What is your employee Id(?) [Required]: ',
            // Validation conditions for the employee ID provided.
            validate: employIdInput => {
                if (employIdInput) {
                    return true;
                } else {
                    console.log('Please enter your id!');
                    return false;
                }
            }
        },
        // Prompt for intern's email address. Stored in an object.
        {
            type: 'input',
            name: 'email',
            message: 'What is your email(?) [Required]: ',
            // Validation conditions for the email address provided.
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        // Prompt for the school intern is going to/graduated from. Stored in an object.
        {
            type: 'input',
            name: 'school',
            message: 'Where are you going/went to school(?) [Required]: ',
            // Validation conditions for the school provided.
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub name!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        // When all prompts are answered, variable is created that stores answers.
        const intern = new Intern(answers.name, answers.employId, answers.email, answers.school);
        // Variable is pushed into teamMates array
        teamMates.push(intern);
        // teamCoffee function called for next prompt
        teamCoffee();
    })
};

// When user selects 'All Set', function for building team is produced
const teamBuilt = () => {
    console.log(`
    ======================
    Team is ready to go!
    ======================`);
    // Function for writing all information into an HTMl file using a siteGenerate function with the teamMates array used
    // If there is an error creating the HTMl function, an error message is generated. Otherwise, completion message is generated.
    fs.writeFile('./source/index.html', siteGenerate(teamMates), (err) => err ? console.error(err): console.log('Whoopah!'));
};

// Function called when user initiates the app
managerCoffee();
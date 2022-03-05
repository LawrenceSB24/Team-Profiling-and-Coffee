const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const siteGenerate = require('./source/coffee.js');

const fs = require('fs');

const Manager = require('./lib/Manager');

const teamMates = [];

const managerCoffee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name(?) [Required]: ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employId',
            message: 'What is your employee Id(?) [Required]: ',
            validate: employIdInput => {
                if (employIdInput) {
                    return true;
                } else {
                    console.log('Please enter your id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email(?) [Required]: ',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeId',
            message: 'What is your office ID (Your office number)(?) [Required]: ',
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
        console.log(answers);
        const manager = new Manager(answers.name, answers.employId, answers.email, answers.officeId);
        teamMates.push(manager);
        teamCoffee();
    })
};

const teamCoffee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which member you would like to add to your team: ',
            choices: [
                'Engineer',
                'Intern',
                'Im a lone wolf. All set.'
            ]
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                default:
                    teamBuilt();
            }
        });
};

const promptEngineer = () => {
    console.log(`
    =================
    Add an Engineer
    =================`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer(?) [Required]: ',
            validate: engNameInput => {
                if (engNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employId',
            message: 'What is your employee Id(?) [Required]: ',
            validate: employIdInput => {
                if (employIdInput) {
                    return true;
                } else {
                    console.log('Please enter your id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email(?) [Required]: ',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitName',
            message: 'What is your GitHub name(?) [Required]: ',
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
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employId, answers.email, answers.gitName);
        teamMates.push(engineer);
        teamCoffee();
    })
};

const promptIntern = () => {
    console.log(`
    =================
    Add an Intern
    =================`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern(?) [Required]: ',
            validate: engNameInput => {
                if (engNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employId',
            message: 'What is your employee Id(?) [Required]: ',
            validate: employIdInput => {
                if (employIdInput) {
                    return true;
                } else {
                    console.log('Please enter your id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email(?) [Required]: ',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where are you going/went to school(?) [Required]: ',
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
        console.log(answers);
        const intern = new Intern(answers.name, answers.employId, answers.email, answers.school);
        teamMates.push(intern);
        teamCoffee();
    })
};

const teamBuilt = () => {
    console.log(`
    ======================
    Team is ready to go!
    ======================`);

    fs.writeFile('./source/index.html', siteGenerate(teamMates), (err) => err ? console.error(err): console.log('Whoopah!'));
};

managerCoffee();
// Class for the engineer's info

// Import of Employee class for name, id, and email retrieval
const Employee = require('./Employee');

// Engineer class is an extension of Employee
class Engineer extends Employee {
    // constructor contains similar information save for the GitHub usename
    constructor(name, id, email, gitName) {
        // All methods for name, id, and email in Employee used for Engineer
        super(name, id, email);

        // GitHub username set to username inputted
        this.gitName = gitName;
    }

    // GitHub username retrieval method
    getGitName() {
        return this.gitName;
    }

    // getRole method for returning role of team member
    getRole() {
        return "Engineer";
    }
}

// Exporting Engineer class for use in external modules
module.exports = Engineer;
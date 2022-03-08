// Retrieves Employee module from lib folder
const Employee = require('../lib/Employee');

// Intern class is extension of Employee class
class Intern extends Employee {
    // constructor contains the school variable
    constructor(name, id, email, school) {
        // Retrieval methods for name, id, and email in Employee used for Intern
        super(name, id, email);

        // School intern attends/graduated from based on user input
        this.school = school;
    }

    // Method for school retrieval based on user input
    getSchool() {
        return this.school;
    }

    // Method for role team member serves
    getRole() {
        return "Intern";
    }
}

// Exports Intern class for external use
module.exports = Intern;
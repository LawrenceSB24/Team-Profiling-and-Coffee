// Employee methods exported from Employee.js 
// (NOTE: can be ../lib/Employee or ./Employee. Both methods work)
const Employee = require('./Employee');

// Manager class is an extension of Employee class
class Manager extends Employee {
    constructor(name, id, email, officeId) {
        // Name, id, and email retrieval methods from Employee for Manager
        super(name, id, email);

        // Office ID number based on user input
        this.officeId = officeId;
    }

    // Method for retrieving office ID number
    getOfficeId() {
        return this.officeId;
    }

    // Return method for role of team member
    getRole() {
        return "Manager";
    }
}

// Manager class exported for external use
module.exports = Manager;
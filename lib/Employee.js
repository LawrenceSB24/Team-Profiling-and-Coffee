// Employee class for producing the name, employee id, and email for each team member
class Employee {
    // constructor for name, id, and email
    constructor(name, id, email) {
        // this.name will be the name user inputs
        this.name = name;
        // this.id will be the employee id user inputs
        this.id = id;
        // this.email will be email user inputs
        this.email = email;
    }

    // Method for retrieveing name of team member
    getName() {
        return this.name;
    }

    // Method for retrieving employee id of team member
    getId() {
        return this.id;
    }

    // Method for retrieving email of team member
    getEmail() {
        return this.email;
    }

    // Method for returning the role of the team member.
    getRole() {
        return "Employee";
    }
}

// Export the Employee class for use in the Manager, Engineer, and Intern classes
module.exports = Employee;
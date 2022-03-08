// Test file for functionality of Employee class

// Retrieve Employee class
const Employee = require('../lib/Employee');

// Variable for Employee class containing placeholder name, id, and email
const employee = new Employee('Micheal', '87469032','M-Sully@yahoo.com')

// Sets each element of the constructor to be placeholder values
it('should be testing to see if we can get the values from constructor for the employee object',() => {
    expect(employee.name).toBe('Micheal');
    expect(employee.id).toBe('87469032');
    expect(employee.email).toBe('M-Sully@yahoo.com');

});

// Test for getName() method
it('should be testing for name retrieval using getName()', () => {
    expect(employee.getName()).toBe('Micheal');
});

// Test for getId() method
it('should be testing for ID retrieval using getId()', () => {
    expect(employee.getId()).toBe('87469032');
});

// Test for getEmail() method
it('should be testing for email retrieval using getEmail()', () => {
    expect(employee.getEmail()).toBe('M-Sully@yahoo.com')
});

// Test for getRole() method
it('should be testing for the role of the team member using getRole()', () => {
    expect(employee.getRole()).toBe('Employee')
});

// All tests need to pass for app to generate team profiles based on user input
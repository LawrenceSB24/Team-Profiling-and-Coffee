const Employee = require('../lib/Employee');
const employee = new Employee('Micheal', '87469032','M-Sully@yahoo.com')

it('should be testing to see if we can get the values from constructor for the employee object',() => {
    expect(employee.name).toBe('Micheal');
    expect(employee.id).toBe('87469032');
    expect(employee.email).toBe('M-Sully@yahoo.com');

});

it('should be testing for name retrieval using getName()', () => {
    expect(employee.getName()).toBe('Micheal');
});

it('should be testing for ID retrieval using getId()', () => {
    expect(employee.getId()).toBe('87469032');
});

it('should be testing for email retrieval using getEmail()', () => {
    expect(employee.getEmail()).toBe('M-Sully@yahoo.com')
});

it('should be testing for the role of the team member using getRole()', () => {
    expect(employee.getRole()).toBe('Employee')
});
// Test for the Manager class

// Retrieval of Manager module
const Manager = require('../lib/Manager');

// Variable for setting consturctor elements of Manager class as placeholder values
const manager = new Manager('Mike','245036','M.Jammeson@hotmail.com','666');

// Test of placing values into the Manager onject
it('should be testing to see if we get values from constructor for the manager object', () => {
    expect(manager.name).toBe('Mike');
    expect(manager.id).toBe('245036');
    expect(manager.email).toBe('M.Jammeson@hotmail.com');
    expect(manager.officeId).toBe('666');
});

// Test of getName() method
it('should be testing for for retrieval for name retrieval using getName()', () => {
    expect(manager.getName()).toBe('Mike');
});

// Test of getId() method
it('should be testing for for retrieval for id retrieval using getId()', () => {
    expect(manager.getId()).toBe('245036');
});

// Test of getEmail() method
it('should be testing for for retrieval for email retrieval using getEmail()', () => {
    expect(manager.getEmail()).toBe('M.Jammeson@hotmail.com');
});

// Test for getOfficeId() method
it('should be testing for for retrieval for officeId retrieval using getOfficeId()', () => {
    expect(manager.getOfficeId()).toBe('666');
});

// Test of getRole() method
it('should be testing for the role of the team member using getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});

// All tests must pas for Manager proile generation based on user input
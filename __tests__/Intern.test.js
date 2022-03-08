// Test for Intern class

// Retrieve Intern module
const Intern = require('../lib/Intern');

// Variable for setting constructor elements as placeholder values
const intern = new Intern('Jean','657023','J.Francois@outlook.com','St.Luke de Bon University');

// Testing to see if values get placed into the Intern object
it('should be testing to see if we get values from constructor for the intern object', () => {
    expect(intern.name).toBe('Jean');
    expect(intern.id).toBe('657023');
    expect(intern.email).toBe('J.Francois@outlook.com');
    expect(intern.school).toBe('St.Luke de Bon University');
});

// Test for getName() method
it('should be testing for for retrieval for name retrieval using getName()', () => {
    expect(intern.getName()).toBe('Jean');
});

// Test for getId() method
it('should be testing for for retrieval for id retrieval using getId()', () => {
    expect(intern.getId()).toBe('657023');
});

// Test for getEmail() method
it('should be testing for for retrieval for email retrieval using getEmail()', () => {
    expect(intern.getEmail()).toBe('J.Francois@outlook.com');
});

// Test for getSchool() method
it('should be testing for for retrieval for school retrieval using getSchool()', () => {
    expect(intern.getSchool()).toBe('St.Luke de Bon University');
});

// Test for getRole() method
it('should be testing for the role of the team member using getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});

// All test must pass for Intern profile generation based on user input
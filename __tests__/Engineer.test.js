// Test file for Engineer class

// Retrieve Engineer class
const Engineer = require('../lib/Engineer');

// Variable for setting placeholder values for Engineer constructor
const engineer = new Engineer('Bobby', '456720','B.Schwang@gmail.com','B.Schwang2');

// Sets each element of consturtor to be the placeholder values
it('should be testing to see if we can get the values from constructor for the engineer object',() => {
    expect(engineer.name).toBe('Bobby');
    expect(engineer.id).toBe('456720');
    expect(engineer.email).toBe('B.Schwang@gmail.com');
    expect(engineer.gitName).toBe('B.Schwang2');
});

// Test for getName() method
it('should be testing for name retrieval using getName()', () => {
    expect(engineer.getName()).toBe('Bobby');
});

// Test for getId() method
it('should be testing for ID retrieval using getId()', () => {
    expect(engineer.getId()).toBe('456720');
});

// Test for getEmail() method
it('should be testing for email retrieval using getEmail()', () => {
    expect(engineer.getEmail()).toBe('B.Schwang@gmail.com')
});

// Test for getGitName() method
it('should be testing for GitHub username retrieval using getGitName()', () => {
    expect(engineer.getGitName()).toBe('B.Schwang2');
});

// Test for getRole() method
it('should be testing for the role of the team member using getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

// All tests must pass for Engineer profile to be generated based on user input
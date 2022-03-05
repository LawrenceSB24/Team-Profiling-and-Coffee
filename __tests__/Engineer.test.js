const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Bobby', '456720','B.Schwang@gmail.com','B.Shwang2');

it('should be testing to see if we can get the values from constructor for the engineer object',() => {
    expect(engineer.name).toBe('Bobby');
    expect(engineer.id).toBe('456720');
    expect(engineer.email).toBe('B.Schwang@gmail.com');
    expect(engineer.gitName).toBe('B.Shwang2');

});

it('should be testing for name retrieval using getName()', () => {
    expect(engineer.getName()).toBe('Bobby');
});

it('should be testing for ID retrieval using getId()', () => {
    expect(engineer.getId()).toBe('456720');
});

it('should be testing for email retrieval using getEmail()', () => {
    expect(engineer.getEmail()).toBe('B.Schwang@gmail.com')
});

it('should be testing for office ID retrieval using getGitName()', () => {
    expect(engineer.getGitName()).toBe('B.Schwang2');
});

it('should be testing for the role of the team member using getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

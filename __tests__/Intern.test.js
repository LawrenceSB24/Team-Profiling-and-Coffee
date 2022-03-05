const Intern = require('../lib/Intern');
const intern = new Intern('Jean','657023','J.Francois@outlook.com','St.Luke de Bon University');

it('should be testing to see if we get values from constructor for the intern object', () => {
expect(intern.name).toBe('Jean');
    expect(intern.id).toBe('657023');
    expect(intern.email).toBe('J.Francois@outlook.com');
    expect(intern.school).toBe('St.Luke de Bon University');
});

it('should be testing for for retrieval for name retrieval using getName()', () => {
    expect(intern.getName()).toBe('Jean');
});

it('should be testing for for retrieval for id retrieval using getId()', () => {
    expect(intern.getId()).toBe('657023');
});

it('should be testing for for retrieval for email retrieval using getEmail()', () => {
    expect(intern.getEmail('J.Francois@outlook.com')).toBe('Jean');
});

it('should be testing for for retrieval for school retrieval using getSchool()', () => {
    expect(intern.getSchool('St.Luke de Bon University')).toBe('Jean');
});

it('should be testing for the role of the team member using getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});
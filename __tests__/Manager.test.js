const Manager = require('../lib/Manager');
const manager = new Manager('Mike','245036','M.Jammeson@hotmail.com','666');

it('should be testing to see if we get values from constructor for the manager object', () => {
expect(manager.name).toBe('Mike');
    expect(manager.id).toBe('245036');
    expect(manager.email).toBe('M.Jammeson@hotmail.com');
    expect(manager.officeId).toBe('666');
});

it('should be testing for for retrieval for name retrieval using getName()', () => {
    expect(manager.getName()).toBe('Mike');
});

it('should be testing for for retrieval for id retrieval using getId()', () => {
    expect(manager.getId()).toBe('245036');
});

it('should be testing for for retrieval for email retrieval using getEmail()', () => {
    expect(manager.getEmail('M.Jammeson@hotmail.com')).toBe('Jean');
});

it('should be testing for for retrieval for officeId retrieval using getOfficeId()', () => {
    expect(manager.getOfficeId('666')).toBe('Jean');
});

it('should be testing for the role of the team member using getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});
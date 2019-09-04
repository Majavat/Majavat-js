const indexREADME = require('../templates/indexREADME');

const mockedTemplate = `# Majavat Project

majavat project description
`;

describe('indexREADME template', () => {
    it('should return the required README template', () => {
        expect(indexREADME('Majavat', 'majavat project description')).toBe(mockedTemplate);
    });
});
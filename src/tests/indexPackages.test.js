const indexPackages = require('../templates/indexPackages');

const mockedTemplate = 'npm i -D jest';

describe('indexPackages template', () => {
    it('should return the required indexPackages template', () => {
        expect(indexPackages()).toBe(mockedTemplate);
    });
});
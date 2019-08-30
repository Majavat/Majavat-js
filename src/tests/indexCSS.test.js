const indexCSS = require('../templates/indexCSS');

const mockedTemplate = `
    body {
        padding: 0;
        margin: 0;
    }
`;

describe('indexCSS template', () => {
    it('should return the required css template', () => {
        expect(indexCSS()).toBe(mockedTemplate);
    });
});
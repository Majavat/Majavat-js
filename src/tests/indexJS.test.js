const indexJS = require('../templates/indexJS');

const mockedTemplate = `const app = document.querySelector("#app");`;

describe('indexJS template', () => {
    it('should return the required js template', () => {
        expect(indexJS()).toBe(mockedTemplate);
    });
});
const indexGitignore = require('../templates/indexGitignore');

const mockedTemplate = `node_modules
coverage
`;

describe('indexGitignore template', () => {
    it('should return the required indexGitignore template', () => {
        expect(indexGitignore()).toBe(mockedTemplate);
    });
});
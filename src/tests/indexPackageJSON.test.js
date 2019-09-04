const indexPackageJSON = require('../templates/indexPackageJSON');

const mockedData = {
    name: "Majavat",
    version: "2.0",
    description: "Majavat Project",
    git: "https://github.com/Majavat/Majavat-js.git",
    keywords: ["majavat", "project-generator", "boilerplate", "lighweight"],
    author: "Majavat",
    license: "ISC",
    url: "https://github.com/Majavat/Majavat-js"
}

const mockedTemplate = `{
    "name": "Majavat",
    "version": "2.0",
    "description": "Majavat Project",
    "main": "index.js",
    "scripts": {
        "test": "jest --verbose",
        "coverage": "jest --coverage",
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/Majavat/Majavat-js.git"
    },
    "keywords": [
        "majavat", "project-generator", "boilerplate", "lighweight"
    ],
    "author": "Majavat",
    "license": "ISC",
    "bugs": {
        "url": "https://github.com/Majavat/Majavat-js/issues" 
    },
    "homepage": "https://github.com/Majavat/Majavat-js#readme"
}
`;

describe('indexPackageJSON template', () => {
    it('should return the required indexPackageJSON template', () => {
        expect(indexPackageJSON(mockedData)).toBe(mockedTemplate);
    });
});
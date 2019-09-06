// import native modules
const fs = require('fs');
const path = require('path');

// import helper module
const createFile = require('../helpers/createFile');

// mocked data
const mockedFileName = 'randomFileNameForTestingPurpose.txt';
const mockedTemplate = 'random template for testing purpose';

// tests
describe('createFile helper', () => {
    it('should create a file if there is no current file with the input value', () => {
        expect(createFile(__dirname, mockedFileName, mockedTemplate)).toBe('file created!');
    });

    it('should should reject file creation operation if the file name exists', () => {
        expect(createFile(__dirname, mockedFileName, mockedTemplate)).toBe('file exists!');
    });

    it('should reject file creation if dir argument is invalid value', () => {
        expect(createFile(undefined, mockedFileName, mockedTemplate)).toBe('invalid file name');
    });

    it('should reject file creation if file argument is invalid value', () => {
        expect(createFile(__dirname, undefined, mockedTemplate)).toBe('invalid file name');
    });

    it('should reject file creation if template argument is invalid value', () => {
        expect(createFile(__dirname, mockedFileName, undefined)).toBe('invalid file name');
    });

    it('the created file should should match the file input', () => {
        expect(fs.existsSync(path.join(__dirname,mockedFileName))).toBe(true);
    });

    it('the created file\'s content should match the template input', () => {
        // read the content inside the randomFileNameForTestingPurpose.txt
        const fileContent = () => {
            const content = fs.readFileSync(path.join(__dirname,mockedFileName), 'utf-8');
            return content;
        }
        
        expect(fileContent()).toBe(mockedTemplate);
    });
});


// delete mocked file after running all tests
afterAll(() => {
    if ( fs.existsSync(path.join(__dirname,mockedFileName)) ) {
        fs.unlinkSync(path.join(__dirname,mockedFileName));
    } 
});
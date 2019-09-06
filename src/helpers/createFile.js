// importing native modules
const fs = require('fs');
const path = require('path');

// importing helper modules
const cli = require('./cli');

// create a file based on its input & template
const createFile = (dir, file, template) => {

    // stop creating the file if the input is undefined
    if ( typeof dir === "undefined" || typeof file === "undefined" || typeof template === "undefined" ) {
        console.log('\ninvalid file name');
        return 'invalid file name';
    } else {

        // check if directory exists before attempting to create it
        if ( !fs.existsSync(path.join(dir, file)) ) {
            console.log(`\ncreating ${file} file`);
            // concatenate directory and file path then create the file based on input
            fs.writeFileSync(path.join(dir, file), template, 'utf-8');
            console.log('done!');
            return 'file created!';
        } else {
            console.log('\nfile exists!');
            cli.close();
            return 'file exists!';
        }

    }

};

module.exports = createFile;
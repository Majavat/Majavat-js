// importing native modules
const fs = require('fs');

// importing helper modules
const cli = require('./cli');

// create a directory based on its input
const createDir = (dir) => {

    // stop creating the directory if the input is undefined
    if ( typeof dir === "undefined" ) {
        console.log('\ninvalid directory name');
        return 'invalid directory name';
    } else {

        // check if directory exists before attempting to create it
        if ( !fs.existsSync(dir) ) {
            console.log(`\ncreating ${dir} directory`);
            fs.mkdirSync(dir);
            console.log('done!');
            return 'directory created!';
        } else {
            console.log('\ndirectory exists!');
            cli.close();
            return 'directory exists!';
        }

    }
    
};

module.exports = createDir;
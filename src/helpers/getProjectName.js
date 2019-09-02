const cli = require('./cli');

// get project name from the input of the user then return it
const getProjectName = () => {
    return new Promise( resolve => {
        cli.question('project name: ', (answer) => {
            resolve(answer);
        });
    })
    .then( answer => answer)
    .catch( error => console.log(error));
};

module.exports = getProjectName;
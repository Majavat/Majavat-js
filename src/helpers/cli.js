// importing readline native module & create interface for it
const cli = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = cli;
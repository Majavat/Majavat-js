const indexPackageJSON = (project) => `{
    "name": "${project.name}",
    "version": "${project.version.length > 0 ? project.version : ""}",
    "description": "${project.description.length > 0 ? project.description : ""}",
    "main": "index.js",
    "scripts": {
        "test": "jest --verbose",
        "coverage": "jest --coverage",
    },
    "repository": {
        "type": "git",
        "url": "${project.git.length > 0 ? project.git : ""}"
    },
    "keywords": [
        ${project.keywords.length > 0 ? project.keywords.map( (keyword, i) => {
            
            if ( i === 0 ||  i === project.keywords.length ) {
                return `"${keyword}"`;
            } 

            return ` "${keyword}"`;
            
            
        }) :  ""}
    ],
    "author": "${project.author.length > 0 ? project.author : ""}",
    "license": "${project.license.length > 0 ? project.license : "MIT"}",
    "bugs": {
        "url": "${project.url.length > 0 ? project.url+"/issues" : ""}" 
    },
    "homepage": "${project.url.length > 0 ? project.url+"#readme" : ""}"
}
`;

module.exports = indexPackageJSON;
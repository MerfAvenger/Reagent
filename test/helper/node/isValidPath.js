const fs = require('fs');

const PAGES_DIRECTORY = "pages";

const isValidPath = (path) => {
    let isValid = false;

    const pathComponents = path.split('/');
    console.log(pathComponents);
    if(!pathComponents || pathComponents.length < 3) {
        console.warn(`Path ${path} was not valid format.`);
        return false;
    }

    if(pathComponents[1] === PAGES_DIRECTORY) {
        console.log(`Path ${path} lead to pages directory. Finding ${pathComponents[2]}`);
        const files = fs.readdirSync(PAGES_DIRECTORY);
        isValid = files.indexOf(pathComponents[2]) !== -1;
        isValid && console.log(`Found ${pathComponents[2]}`);
    }

    return isValid;
}

module.exports = isValidPath;
const fs = require("fs");
const splitPath = require("./splitPath")

const PAGES_DIRECTORY = "./pages/";
const JS_DIRECTORY = "./public/";

const isValidPath = (pathString) => {
    if(!pathString) {
        console.warn(`Path ${pathString} was invalid.`);
        return false;
    }

    let isValid = false;
    const {dirname, filename} = splitPath(pathString);

    switch(dirname) {
        case PAGES_DIRECTORY: 
            console.log(`Path <${pathString}> lead to pages directory. Finding ${filename}`);
            isValid = checkPagesDirectory(filename);
            return isValid;
        case JS_DIRECTORY:
            console.log(`Path <${pathString}> lead to the javascript directory. Finding ${filename}`);
            isValid = checkJavascriptDirectory(filename);
            return isValid;
        default:
            console.log(`Path <${pathString}> did not lead to a known directory.`);
            return isValid;
    }
}

const checkPagesDirectory = (filename) => {
    const files = fs.readdirSync(PAGES_DIRECTORY);
    const isValid = files.indexOf(filename) !== -1;
    return isValid;
}

const checkJavascriptDirectory = (filename) => {
    const files = fs.readdirSync(JS_DIRECTORY);
    const isValid = files.indexOf(filename) !== -1;
    return isValid;
}

module.exports = isValidPath;
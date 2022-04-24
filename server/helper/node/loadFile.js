const fs = require('fs');

const loadFile = (filepath) => {
    let file;
    
    try {
        console.log(`Loading file: ${filepath}.`);
        file = fs.readFileSync(filepath);
    } catch (e) {
        console.error(e);
        return null;
    }
    
    console.log(`Found file: ${file}`);
    return file;
}

module.exports = loadFile;
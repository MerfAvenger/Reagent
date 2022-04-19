const fs = require('fs');

const loadHtml = (filepath) => {
    let html;
    
    try {
        console.log(`Loading HTML file: ${filepath}.`);
        html = fs.readFileSync(filepath);
    } catch (e) {
        console.error(e);
        return null;
    }
    
    console.log(`Found HTML: ${html}`);
    return html;
}

module.exports = loadHtml;
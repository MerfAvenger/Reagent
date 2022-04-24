const errorResponse = require('./errorResponse');
const loadFile      = require('./loadFile');
const isValidPath   = require('./isValidPath');
const splitPath = require('./splitPath');

const HTML = "html";
const JS = "js";

const serve = (path, res) => {
    if(!isValidPath(path)) {
        errorResponse(`Cannot find resource at: ${path}`, res);
        return;
    }

    const extension = splitPath(path)
        .filename
        .split('.');

    console.log({extension});

    switch(extension[1].toLocaleLowerCase()) {
        case HTML:
            const html = loadFile(`${path}`);
            if(!html) {
                errorResponse(`Could not load ${path}`, res);
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', "text/html");
            res.end(html);
            return;

        case JS:
            const js = loadFile(`${path}`);
            if(!js) {
                errorResponse(`Could not load ${path}`, res);
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', "text/javascript");
            res.end(js);
            return;
    }

    
};

module.exports = serve;
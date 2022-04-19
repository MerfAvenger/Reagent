const errorResponse = require('./errorResponse');
const loadHtml      = require('./loadHtml');
const isValidPath   = require('./isValidPath');

const serve = (path, res) => {
    if(!isValidPath(path)) {
        errorResponse(`Cannot find resource at: ${path}`, res);
        return;
    }

    const html = loadHtml(`.${path}`);
    if(!html) {
        errorResponse(`Could not load ${path}`);
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', "text/html");
    res.end(html);
};

module.exports = serve;
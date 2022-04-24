require('dotenv').config();

const http      = require('http');
const fs        = require('fs');

const utils     = require('./helper');

const config    = require('./app.config.json');

config.port     = process.env.PORT;
config.hostname = process.env.HOSTNAME;

const server = http.createServer((req, res) => {
    const url = 
        "." +
        (req.url !== "/" ? req.url : "/pages/index.html");
    console.log(`Request for resource at: ${url}`);

    utils.serve(url, res);    
});

server.listen(config.port, config.hostname, () => {
    console.log(`Server running on ${config.hostname}:${config.port}`);
});


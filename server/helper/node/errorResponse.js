const errorResponse = (message, res) => {
    console.warn(message);
    res.statusCode = 404;
    res.end(message);
}

module.exports = errorResponse;
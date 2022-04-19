const errorResponse = (message, res) => {
    console.warn();
    res.statusCode = 404;
    res.end(message);
}

module.exports = errorResponse;
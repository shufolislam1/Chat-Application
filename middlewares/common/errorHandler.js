const createError = require('http-errors')

// 404 not found handler
function notFoundHandler(req, res, next) {
    next(createError(404, "Your requested Content was not Found!!!"));
}

// default error handler
function errorHandler(error, req, res, next) {
    res.render("error", {
        title: "Error Page"
    })
}

module.exports = {
    notFoundHandler,
    errorHandler
}
const createError = require('http-errors')

// 404 not found handler
function notFoundHandler(req, res, next) {
    next(createError(404, "Your requested Content was not Found!!!"));
}

// default error handler
function errorHandler(error, req, res, next) {
    res.locals.error = error;
    res.status(error.status || 5000)

    if(res.locals.html){
        // html response
        res.render("error", {
            title: "Error page"
        })
    }else{
        // json response
        res.json(res.locals.error)
    }
}

module.exports = {
    notFoundHandler,
    errorHandler
}
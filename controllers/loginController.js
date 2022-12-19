function loginController(req,res, next){
    res.render("index", {
        title: "Login - Chat Application"
    })
}

module.exports = loginController
function userController(req,res, next){
    res.render("users", {
        title: "User - Chat Application"
    })
}

module.exports = userController
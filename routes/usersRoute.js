// External imports
const express = require('express')

// internal imports
const userController = require('../controllers/usersController')

// router making
const router = express.Router()

router.get('/', userController)

module.exports = router
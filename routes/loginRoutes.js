// External imports
const express = require('express')

// internal imports
const loginController = require('../controllers/loginController')

// router making
const router = express.Router()

router.get('/', loginController)

module.exports = router
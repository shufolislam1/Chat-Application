// External imports
const express = require('express')

// internal imports
const inboxController = require('../controllers/inboxController')

// router making
const router = express.Router()

router.get('/', inboxController)

module.exports = router
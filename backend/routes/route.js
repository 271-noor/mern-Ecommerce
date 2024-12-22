const express = require('express')

const router = express.Router()


const userSignUpController = require('../controllers/userSignupController')

router.post("/signup", userSignUpController)

module.exports = router
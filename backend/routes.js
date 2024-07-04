const express = require('express')
const router = express.Router()

const { userRegistration } = require('./api/userManagement')

router.route("/api/userManagement/registerUser").post(userRegistration)

module.exports = router
const mongo = require('mongoose')
const userSchema = new mongo.Schema({})

const USER = mongo.model("USER", userSchema)

module.exports = USER
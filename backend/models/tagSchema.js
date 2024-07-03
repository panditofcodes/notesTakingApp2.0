const mongo = require('mongoose')

const tagSchema = mongo.Schema({})

const TAGS = mongo.model("TAGS",tagSchema)

module.exports = TAGS
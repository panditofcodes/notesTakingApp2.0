const mongo = require('mongoose')

const notesSchema = mongo.Schema({})

const NOTES = mongo.model("NOTES",notesSchema)

module.exports = NOTES
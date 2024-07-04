const mongo = require("mongoose");
const userSchema = new mongo.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const USER = mongo.model("USER", userSchema);

module.exports = USER;

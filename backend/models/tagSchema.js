const mongo = require("mongoose");

const tagSchema = mongo.Schema({
  user: {
    type: mongo.Schema.Types.ObjectId,
    ref: "USER",
    required: true,
  },
  tag: {
    type: String,
  },
});

const TAGS = mongo.model("TAGS", tagSchema);

module.exports = TAGS;

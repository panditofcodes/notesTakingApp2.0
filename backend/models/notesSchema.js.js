const mongo = require("mongoose");

const notesSchema = new mongo.Schema(
  {
    user: {
      type: mongo.Schema.Types.ObjectId,
      ref: "USER",
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: mongo.Schema.Types.ObjectId,
        ref:"TAGS",
      },
    ],
    state: {
      type: String,
      enum: ["bin", "keep"],
      default: "keep",
    },
  },
  { timestamps: true }
);

const NOTES = mongo.model("NOTES", notesSchema);

module.exports = NOTES;

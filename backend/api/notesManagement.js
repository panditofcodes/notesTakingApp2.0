const Notes = require("../models/notesSchema");

const saveNote = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "Insuffiecient data" });
  }

  try {
    const { title, content, tags, saveIn } = req.body
  } catch (error) {
    console.log(error);
  }
};

module.exports = { saveNote };

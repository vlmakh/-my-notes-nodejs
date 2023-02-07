const { Note } = require("../../models/noteSchema");

const deleteNote = async (req, res, next) => {
  const { noteId } = req.params;

  try {
    const data = await Note.findByIdAndDelete(noteId);
    if (!data) {
      res.status(404).json({ message: `Note with id ${noteId} was not found` });
      return;
    }
    res.status(200).json({ message: "Note deleted", ...data._doc });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteNote;

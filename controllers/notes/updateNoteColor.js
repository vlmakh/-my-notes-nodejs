const { Note, joiColorSchema } = require("../../models/noteSchema");
const createError = require("http-errors");

const updateNoteColor = async (req, res, next) => {
  const { noteId } = req.params;
  const { color } = req.body;

  try {
    const { error } = joiColorSchema.validate({ color });

    if (error) {
      error.status = 400;
      error.message = "missing color";
      throw error;
    }

    const data = await Note.findByIdAndUpdate(
      noteId,
      { color },
      {
        new: true,
      }
    );

    if (!data) {
      throw createError(404, `Note id:${noteId} was not found`);
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = updateNoteColor;

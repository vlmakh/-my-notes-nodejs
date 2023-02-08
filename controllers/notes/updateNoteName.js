const { Note, joiNameSchema } = require("../../models/noteSchema");
const createError = require("http-errors");

const updateNoteName = async (req, res, next) => {
  const { noteId } = req.params;
  const { name } = req.body;

  try {
    const { error } = joiNameSchema.validate({ name });

    if (error) {
      error.status = 400;
      error.message = "missing name";
      throw error;
    }

    const data = await Note.findByIdAndUpdate(
      noteId,
      { name },
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

module.exports = updateNoteName;

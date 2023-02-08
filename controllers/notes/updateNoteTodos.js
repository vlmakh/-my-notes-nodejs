const { Note, joiTodosSchema } = require("../../models/noteSchema");
const createError = require("http-errors");

const updateNoteTodos = async (req, res, next) => {
  const { noteId } = req.params;
  const { todos } = req.body;

  try {
    const { error } = joiTodosSchema.validate({ todos });

    if (error) {
      error.status = 400;
      error.message = "missing todos";
      throw error;
    }

    const data = await Note.findByIdAndUpdate(
      noteId,
      { todos },
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

module.exports = updateNoteTodos;

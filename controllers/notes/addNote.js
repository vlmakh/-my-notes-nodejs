const { Note, joiNoteSchema } = require("../../models/noteSchema");

const addNote = async (req, res, next) => {
  const { _id } = await req.user;

  try {
    const { error } = joiNoteSchema.validate(req.body);

    if (error) {
      error.status = 400;
      throw error;
    }

    const data = await Note.create({ ...req.body, owner: _id });

    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = addNote;

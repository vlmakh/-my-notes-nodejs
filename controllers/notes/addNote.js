const { Note } = require("../../models/noteSchema");

const addNote = async (req, res, next) => {
  const { _id } = await req.user;

  try {
    const data = await Note.create({ ...req.body, owner: _id });

    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = addNote;

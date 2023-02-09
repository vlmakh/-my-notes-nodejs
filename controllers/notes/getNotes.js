const { Note } = require("../../models/noteSchema");

const getNotes = async (req, res, next) => {
  const { _id } = await req.user;

  try {
    const data = await Note.find({ owner: _id }, { owner: 0 });

    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getNotes;

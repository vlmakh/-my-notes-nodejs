const { Schema, model } = require("mongoose");

const noteSchema = Schema(
  {
    name: {
      type: String,
    },
    todos: {
      type: Array,
    },
    color: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Note = model("note", noteSchema);

module.exports = {
  Note,
};

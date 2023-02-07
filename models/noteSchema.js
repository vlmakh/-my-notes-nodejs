const { Schema, model } = require("mongoose");

const noteSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for note"],
      minlength: 1,
      maxlength: 30,
    },
    todos: {
      type: String,
    },
    color: {
      type: String,
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

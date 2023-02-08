const { Schema, model } = require("mongoose");
const Joi = require("joi");

const noteSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    todos: {
      type: Array,
      required: true,
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

const joiNoteSchema = Joi.object({
  name: Joi.string().required(),
  todos: Joi.array().required(),
  color: Joi.string().required(),
});

const joiTodosSchema = Joi.object({
  todos: Joi.array().required(),
});

const Note = model("note", noteSchema);

module.exports = {
  Note,
  joiNoteSchema,
  joiTodosSchema,
};

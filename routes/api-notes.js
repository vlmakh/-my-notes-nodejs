const express = require("express");
const { notes: ctrl } = require("../controllers");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, ctrl.getNotes);

router.post("/", auth, ctrl.addNote);

router.delete("/:noteId", auth, ctrl.deleteNote);

router.put("/:noteId/todos", auth, ctrl.updateNoteTodos);

router.put("/:noteId/color", auth, ctrl.updateNoteColor);

router.put("/:noteId/name", auth, ctrl.updateNoteName);

module.exports = router;

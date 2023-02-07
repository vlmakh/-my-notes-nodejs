const express = require("express");
const { notes: ctrl } = require("../controllers");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, ctrl.getNotes);

router.post("/", auth, ctrl.addNote);

router.delete("/:noteId", auth, ctrl.deleteNote);

router.put("/:noteId", auth, ctrl.updateNoteById);

module.exports = router;

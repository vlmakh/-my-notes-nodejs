const express = require("express");
const { notes: ctrl } = require("../controllers");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", ctrl.getNotes);

router.post("/", auth, ctrl.addNote);

// router.delete("/:notetId", auth, ctrl.deleteNote);

// router.put("/:notetId", auth, ctrl.updateNote);

module.exports = router;

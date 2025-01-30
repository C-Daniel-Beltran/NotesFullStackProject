const express = require("express");
const router = express.Router();
const NotesController = require("../controllers/notes.controller");

router.get("/", NotesController.getAll);
router.post("/", NotesController.create);
router.put("/", NotesController.update);
router.delete("/:id", NotesController.remove);

module.exports = router;

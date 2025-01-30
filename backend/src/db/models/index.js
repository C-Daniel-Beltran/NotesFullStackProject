const { Note, NoteSchema } = require("./notes.model");

function setupModels(sequelize) {
  Note.init(NoteSchema, Note.config(sequelize));
}

module.exports = setupModels;

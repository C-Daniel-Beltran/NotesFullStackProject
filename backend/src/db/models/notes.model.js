const { Model, DataTypes } = require("sequelize");
//const { update } = require("../../controllers/notes.controller");

const NOTE_TABLE = "Note";

class Note extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: NOTE_TABLE,
      modelName: "Note",
      timestamps: false,
    };
  }
}

const NoteSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  note: {
    allowNull: false,
    type: DataTypes.TEXT,
    field: "note",
  },
  isArchived: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "is_archived",
    defaultValue: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "updated_at",
    defaultValue: DataTypes.NOW,
  },
};

module.exports = { Note, NoteSchema };

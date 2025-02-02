/**
 * Note Model Module
 *
 * This module defines the `Note` model for Sequelize, which represents the structure and configuration
 * of the "Note" table in the database. It includes the model class, schema, and configuration.
 *
 * @module NoteModel
 */

const { Model, DataTypes } = require("sequelize"); // Import Sequelize classes

// Define the table name as a constant
const NOTE_TABLE = "Note";

/**
 * Note Model Class
 *
 * This class represents the `Note` model in Sequelize. It extends the base `Model` class
 * and includes a static method for configuration.
 */
class Note extends Model {
  /**
   * Static method to configure the `Note` model.
   *
   * @static
   * @function config
   * @param {Object} sequelize - The Sequelize instance connected to the database.
   * @returns {Object} Configuration object for the `Note` model.
   */
  static config(sequelize) {
    return {
      sequelize, // Sequelize instance
      tableName: NOTE_TABLE, // Table name in the database
      modelName: "Note", // Model name
      timestamps: false, // Disable automatic timestamps (createdAt, updatedAt)
    };
  }
}

/**
 * Note Schema
 *
 * This object defines the structure of the "Note" table in the database.
 * It specifies the columns, their data types, constraints, and default values.
 *
 * @type {Object}
 * @property {Object} id - Primary key column.
 * @property {boolean} id.allowNull - Disallows null values.
 * @property {boolean} id.autoIncrement - Enables auto-increment for the column.
 * @property {boolean} id.primaryKey - Marks the column as the primary key.
 * @property {string} id.type - Data type of the column (INTEGER).
 * @property {Object} note - Column for storing the note content.
 * @property {boolean} note.allowNull - Disallows null values.
 * @property {string} note.type - Data type of the column (TEXT).
 * @property {string} note.field - Maps the column to the "note" field in the database.
 * @property {Object} isArchived - Column for indicating if the note is archived.
 * @property {boolean} isArchived.allowNull - Disallows null values.
 * @property {string} isArchived.type - Data type of the column (BOOLEAN).
 * @property {string} isArchived.field - Maps the column to the "is_archived" field in the database.
 * @property {boolean} isArchived.defaultValue - Default value for the column (false).
 * @property {Object} createdAt - Column for storing the creation timestamp.
 * @property {boolean} createdAt.allowNull - Disallows null values.
 * @property {string} createdAt.type - Data type of the column (DATE).
 * @property {string} createdAt.field - Maps the column to the "created_at" field in the database.
 * @property {string} createdAt.defaultValue - Default value for the column (current timestamp).
 * @property {Object} updatedAt - Column for storing the last update timestamp.
 * @property {boolean} updatedAt.allowNull - Disallows null values.
 * @property {string} updatedAt.type - Data type of the column (DATE).
 * @property {string} updatedAt.field - Maps the column to the "updated_at" field in the database.
 * @property {string} updatedAt.defaultValue - Default value for the column (current timestamp).
 */
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

// Export the Note model and schema
module.exports = { Note, NoteSchema };

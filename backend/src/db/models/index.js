/**
 * Setup Models Function
 *
 * This module defines a function to initialize and configure Sequelize models for the application.
 * It is responsible for setting up the `Note` model using the provided schema and configuration.
 *
 * @module setupModels
 */

const { Note, NoteSchema } = require("./notes.model"); // Import the Note model and schema

/**
 * Initialize and Configure Models
 *
 * This function initializes the `Note` model using its schema and configuration.
 * It is typically called during the application startup to set up the database models.
 *
 * @function setupModels
 * @param {Object} sequelize - The Sequelize instance connected to the database.
 * @returns {void}
 */
function setupModels(sequelize) {
  // Initialize the Note model with its schema and configuration
  Note.init(NoteSchema, Note.config(sequelize));
}

// Export the setupModels function
module.exports = setupModels;

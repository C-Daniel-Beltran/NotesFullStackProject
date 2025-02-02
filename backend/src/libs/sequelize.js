/**
 * Sequelize Database Connection Module
 *
 * This module sets up and exports a Sequelize instance for connecting to a PostgreSQL database.
 * It uses configuration settings (e.g., database name, user, password) from the application's config file
 * and initializes the database models using the `setupModels` function.
 *
 * @module sequelize
 */

const { Sequelize } = require("sequelize"); // Import Sequelize
const { config } = require("../config/config"); // Import configuration settings
const setupModels = require("../db/models"); // Import the setupModels function

/**
 * Sequelize Instance
 *
 * This creates a new Sequelize instance to connect to the PostgreSQL database.
 * The connection details (database name, user, password, host) are sourced from the configuration file.
 *
 * @type {Sequelize}
 */
const sequelize = new Sequelize(
  config.dbName, // Database name
  config.dbUser, // Database user
  config.dbPassword, // Database password
  {
    host: config.dbHost, // Database host
    dialect: "postgres", // Database dialect (PostgreSQL)
  }
);

// Synchronize models with the database
sequelize.sync();

// Set up models by passing the Sequelize instance to the setupModels function
setupModels(sequelize);

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;

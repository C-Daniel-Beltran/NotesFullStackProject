/**
 * Configuration Module
 *
 * This module is responsible for loading and exporting environment-specific configuration settings.
 * It uses the `dotenv` package to load environment variables from a `.env` file into `process.env`.
 *
 * The configuration object includes settings for the application environment, server port, and database connection details.
 * If certain environment variables are not set, default values are provided.
 *
 * @module config
 */

// Load environment variables from a .env file into process.env
require("dotenv").config();

/**
 * Configuration Object
 *
 * This object contains the application's configuration settings, which are primarily sourced from environment variables.
 * If an environment variable is not set, a default value is provided.
 *
 * @type {Object}
 * @property {string} env - The application environment (e.g., "development", "production"). Defaults to "development".
 * @property {number} port - The port on which the server will run. Defaults to 3000.
 * @property {string} dbUser - The username for the database connection.
 * @property {string} dbPassword - The password for the database connection.
 * @property {string} dbHost - The host address of the database.
 * @property {string} dbPort - The port on which the database is running.
 * @property {string} dbName - The name of the database to connect to.
 */
const config = {
  env: process.env.NODE_ENV || "development", // Application environment
  port: process.env.PORT || 3000, // Server port
  dbUser: process.env.DB_USER, // Database username
  dbPassword: process.env.DB_PASSWORD, // Database password
  dbHost: process.env.DB_HOST, // Database host
  dbPort: process.env.DB_PORT, // Database port
  dbName: process.env.DB_NAME, // Database name
};

// Export the configuration object
module.exports = { config };

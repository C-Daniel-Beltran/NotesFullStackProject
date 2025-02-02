/**
 * API Router Configuration Module
 *
 * This module defines a function to set up and organize the API routes for the application.
 * It uses Express to create a base router for versioning (`/api/v1`) and mounts specific routers
 * (e.g., `NotesRouter`) under this base path.
 *
 * @module routerApi
 */

const express = require("express"); // Import Express

// Import the Notes router
const NotesRouter = require("./notes.router");

/**
 * Configure API Routes
 *
 * This function sets up the base API route (`/api/v1`) and mounts specific routers under it.
 *
 * @function routerApi
 * @param {Object} app - The Express application instance.
 * @returns {void}
 */
function routerApi(app) {
  // Create a base router for versioning
  const router = express.Router();

  // Mount the base router under `/api/v1`
  app.use("/api/v1", router);

  // Mount the Notes router under `/api/v1/notes`
  router.use("/notes", NotesRouter);
}

// Export the routerApi function
module.exports = routerApi;

/**
 * Notes Controller Module
 *
 * This module defines the controller functions for handling HTTP requests related to notes.
 * It interacts with the `NotesService` to perform CRUD operations (Create, Read, Update, Delete) on notes.
 * Each function handles errors and sends appropriate HTTP responses.
 *
 * @module NotesController
 */

const NotesService = require("../services/notes.service"); // Import the NotesService
const service = new NotesService(); // Create an instance of NotesService

/**
 * Get All Notes
 *
 * Handles the HTTP GET request to retrieve all notes.
 *
 * @async
 * @function getAll
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<void>} Sends a JSON response with the list of notes or an error message.
 */
const getAll = async (req, res) => {
  try {
    const response = await service.findAll(); // Fetch all notes from the service
    res.json(response); // Send the response as JSON
  } catch (error) {
    res.status(500).send({ success: false, error: error.message }); // Handle errors
  }
};

/**
 * Create a New Note
 *
 * Handles the HTTP POST request to create a new note.
 *
 * @async
 * @function create
 * @param {Object} req - The HTTP request object. The request body should contain the note data.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<void>} Sends a success message or an error message.
 */
const create = async (req, res) => {
  try {
    await service.create(req.body); // Create a new note using the service
    res.status(200).send({ tipo: "success", msj: "Note created" }); // Send success response
  } catch (error) {
    res.status(500).send({ success: false, error: error.message }); // Handle errors
  }
};

/**
 * Update an Existing Note
 *
 * Handles the HTTP PUT request to update an existing note.
 *
 * @async
 * @function update
 * @param {Object} req - The HTTP request object. The request body should contain the note ID and updated data.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<void>} Sends a success message or an error message.
 */
const update = async (req, res) => {
  try {
    const { id } = req.body; // Extract the note ID from the request body
    const body = req.body; // Extract the updated data from the request body
    body.updatedAt = new Date(); // Add the current timestamp to the updated data
    await service.update(id, body); // Update the note using the service
    res.status(200).send({ tipo: "success", msj: "Note updated" }); // Send success response
  } catch (error) {
    res.status(500).send({ success: false, error: error.message }); // Handle errors
  }
};

/**
 * Delete a Note
 *
 * Handles the HTTP DELETE request to delete a note by its ID.
 *
 * @async
 * @function remove
 * @param {Object} req - The HTTP request object. The request parameters should contain the note ID.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<void>} Sends a JSON response with the result of the deletion or an error message.
 */
const remove = async (req, res) => {
  try {
    const { id } = req.params; // Extract the note ID from the request parameters
    const response = await service.delete(id); // Delete the note using the service
    res.json(response); // Send the response as JSON
  } catch (error) {
    res.status(500).send({ success: false, error: error.message }); // Handle errors
  }
};

// Export the controller functions
module.exports = {
  getAll,
  create,
  update,
  remove,
};

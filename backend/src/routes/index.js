const express = require("express");

const NotesRouter = require("./notes.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/notes", NotesRouter);
}

module.exports = routerApi;

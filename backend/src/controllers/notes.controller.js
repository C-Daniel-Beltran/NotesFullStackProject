const NotesService = require("../services/notes.service");
const service = new NotesService();

const getAll = async (req, res) => {
  try {
    const response = await service.findAll();
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

const create = async (req, res) => {
  try {
    await service.create(req.body);
    res.status(200).send({ tipo: "success", msj: "Note created" });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.body;
    const body = req.body;
    body.updatedAt = new Date();
    await service.update(id, body);
    res.status(200).send({ tipo: "success", msj: "Note updated" });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};

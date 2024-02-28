const Actua = require("../models/Actua.js");

const ActuaController = {
  async create(req, res) {
    try {
      const actua = await Actua.create({ ...req.body });
      res.status(201).send(actua);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "ha habido un problema al crear la actuacion",
      });
    }
  },
  async getAll(req, res) {
    try {
      const actua = await Actua.find();
      res.status(201).send(actua);
    } catch (error) {
      console.error(error);
    }
  },
  async getById(req, res) {
    try {
      const actua = await Actua.findById(req.params._id);
      return res.send(actua);
    } catch (error) {
      console.error(error);
    }
  },
  async deleteById(req, res) {
    try {
      const actua = await Actua.findByIdAndDelete(req.params.id);
      return res.send({actua});
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = ActuaController;

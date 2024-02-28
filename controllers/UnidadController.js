const Unidad = require("../models/unidad.js");

const UnidadController = {
  async create(req, res) {
    try {
      const unidad = await Unidad.create({ ...req.body });
      res.status(201).send(unidad);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear la unidad" });
    }
  },

  async getAll(req, res) {
    try {
      const unidades = await Unidad.find();
      res.send(unidades);
    } catch (error) {
      console.error(error);
    }
  },

  async getById(req, res) {
    try {
      const unidad = await Unidad.findById(req.params._id);
      res.send(unidad);
    } catch (error) {
      console.error(error);
    }
  },
  async getByProvincia(req, res) {
    try {
      const unidades = await Unidad.find({ provincia: req.params.provincia });
      res.send(unidades);
    } catch (error) {
      console.error(error);
    }
  },
  async getUnidadByName(req, res) {
    try {
      const unidad = await Unidad.aggregate([
        {
          $match: {
            name: req.params.name,
          },
        },
      ]);
      res.send(unidad);
    } catch (error) {
      console.log(error);
    }
  },
  async getUnidadByProvincia(req, res) {
    try {
      const unidad = await Unidad.aggregate([
        {
          $match: {
            name: req.params.provincia,
          },
        },
      ]);
      res.send(unidad);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req, res) {
    try {
      const unidad = await Unidad.findByIdAndDelete(req.params._id);
      res.send({ unidad, message: "Unidad borrada" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: " problema con el borrado" });
    }
  },
  async update(req, res) {
    try {
      const unidad = await Unidad.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      res.send({ message: "Unidad modificada", unidad });
    } catch (error) {
      console.error(error);
    }
  },
  async updateActuando(req, res) {
    const unidad = await Unidad.findByIdAndUpdate({ _id: req.params._id });
    if (unidad.actuando === true) {
      unidad.actuando = false;
      unidad.horaprevista = req.body.horaprevista;
      unidad.save();
      res.send(unidad);
    } else {
      unidad.actuando = true;
      unidad.save();
      res.send(unidad);
    }
  },
  async updateHoraPrevista(req, res) {
    const unidad = await Unidad.findByIdAndUpdate(req.params._id);
  },
};

module.exports = UnidadController;

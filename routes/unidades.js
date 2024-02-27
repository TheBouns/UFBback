const express = require("express");
const router = express.Router();
const UnidadController = require("../controllers/UnidadController");

router.post("/", UnidadController.create);
router.get("/", UnidadController.getAll);
router.get("/id/:_id", UnidadController.getById);
router.get("/buscar/:provincia", UnidadController.getByProvincia);
router.put("/unidad/:_id", UnidadController.updateActuando);
router.get("/id/:name", UnidadController.getUnidadByName);
router.delete("/id/:_id", UnidadController.delete);
router.put("/:_id", UnidadController.update);

module.exports = router;

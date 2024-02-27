const express = require("express");
const router = express.Router();
const ActuaController = require("../controllers/ActuaController");

router.get("/", ActuaController.getAll);
router.get("/search/:_id", ActuaController.getById);
router.post("/", ActuaController.create);
router.delete("/:id", ActuaController.deleteById)

module.exports = router;

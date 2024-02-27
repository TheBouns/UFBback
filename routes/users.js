const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/authentication");

router.post("/", UserController.register);
router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);
router.get("/", UserController.getAll);
router.get("/id/:_id", UserController.getById);
router.get("/name/:name", UserController.getUserByName);
router.delete("/:_id", UserController.delete);
router.put("/id/:_id", UserController.update);

module.exports = router;

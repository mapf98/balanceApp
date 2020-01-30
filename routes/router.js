const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller.js");


router.get("/users", controller.getUsers);
router.get("/users/:id", controller.getUserById);
router.post("/users/create", controller.createUser);

module.exports = router;

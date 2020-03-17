const express = require("express");
const router = express.Router();
//const controller = require("../controllers/controller.js");
const bankController = require("../controllers/bank/bank-controller.js");

//CRUD USUARIO

//CRUD BANCO
router.get("/banks", bankController.getBanks);
router.get("/banks/:id", bankController.getBank);
router.post("/bank/create", bankController.createBank);
router.put("/bank/update", bankController.updateBank);
router.delete("/bank/:id", bankController.deleteBank);

//CRUD MONEDA

//CRUD CUENTA

//CRUD TRANSACCION


// router.get("/users", controller.getUsers);
// router.get("/users/:id", controller.getUserById);
// router.post("/users/create", controller.createUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const bankController = require("../controllers/bank/bank-controller.js");

//CRUD USUARIO
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUser);
router.post("/users/create", userController.createUser);
router.put("/users/update/:id", userController.updateUser);
router.delete("/users/delete/:id", userController.deleteUser);

//CRUD BANCO
router.get("/banks", bankController.getBanks);
router.get("/banks/:id", bankController.getBank);
router.post("/banks/create", bankController.createBank);
router.put("/banks/update/:id", bankController.updateBank);
router.delete("/banks/delete/:id", bankController.deleteBank);

//CRUD MONEDA

//CRUD CUENTA

//CRUD TRANSACCION

module.exports = router;

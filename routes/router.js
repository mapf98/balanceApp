const express = require("express");
const router = express.Router();
//const controller = require("../controllers/controller.js");
const bankController = require("../controllers/bank/bank-controller.js");

//CRUD USUARIO

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

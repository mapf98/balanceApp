const express = require("express");
const router = express.Router();
const bankController = require("../controllers/bank/bank-controller.js");
const userController = require("../controllers/user/user-controller.js");
const currencyController = require("../controllers/currency/currency-controller.js");
const accountController = require("../controllers/account/account-controller.js");
const transactionController = require("../controllers/transaction/transaction-controller.js");

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
router.get("/currencies", currencyController.getCurrencies);
router.get("/currencies/:id", currencyController.getCurrency);
router.post("/currencies/create", currencyController.createCurrency);
router.put("/currencies/update/:id", currencyController.updateCurrency);
router.delete("/currencies/delete/:id", currencyController.deleteCurrency);

//CRUD CUENTA
router.get("/accounts", accountController.getAccounts);
router.get("/accounts/:id", accountController.getAccount);
router.post("/accounts/create", accountController.createAccount);
router.put("/accounts/update/:id", accountController.updateAccount);
router.delete("/accounts/delete/:id", accountController.deleteAccount);

//CRUD TRANSACCION
router.get("/transactions", transactionController.getTransactions);
router.get("/transactions/:id", transactionController.getTransaction);
router.post("/transactions/create", transactionController.createTransaction);
router.put("/transactions/update/:id", transactionController.updateTransaction);
router.delete("/transactions/delete/:id", transactionController.deleteTransaction);

module.exports = router;

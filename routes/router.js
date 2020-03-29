const express = require("express");
const router = express.Router();
const bankController = require("../controllers/bank/bank-controller.js");
const userController = require("../controllers/user/user-controller.js");
const currencyController = require("../controllers/currency/currency-controller.js");
const accountController = require("../controllers/account/account-controller.js");
const transactionController = require("../controllers/transaction/transaction-controller.js");
const statusController = require("../controllers/estatus/estatus-controller.js");
const currencyHistoryController = require("../controllers/currency_history/currency-history-controller.js");
const feedbackController = require("../controllers/feedback/feedback-controller.js");
const placeController = require("../controllers/place/place-controller.js");
const profileController = require("../controllers/profile/profile-controller.js");
const categoryController = require("../controllers/category/category-controller.js");
const auth = require("../services/auth.js");

//CRUD USUARIO
router.get("/users", auth.validateToken, userController.getUsers);
router.get("/users/:id", auth.validateToken, userController.getUser);
router.post("/users/create", userController.createUser);
router.put("/users/update/:id", auth.validateToken, userController.updateUser);
router.put(
  "/users/change-status/:id",
  auth.validateToken,
  userController.changeStatusUser
);
router.delete(
  "/users/delete/:id",
  auth.validateToken,
  userController.deleteUser
);

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
router.put("/currencies/update/aode", currencyController.updateAODECurrency);
router.delete("/currencies/delete/:id", currencyController.deleteCurrency);

//CRUD CUENTA
router.get("/accounts", auth.validateToken, accountController.getAccounts);
router.get("/accounts/:id", auth.validateToken, accountController.getAccount);
router.post(
  "/accounts/create",
  auth.validateToken,
  accountController.createAccount
);
router.put(
  "/accounts/update/:id",
  auth.validateToken,
  accountController.updateAccount
);
router.put(
  "/accounts/change-status/:id",
  auth.validateToken,
  accountController.changeStatusAccount
);
router.delete(
  "/accounts/delete/:id",
  auth.validateToken,
  accountController.deleteAccount
);

//CRUD TRANSACCION
router.get(
  "/transactions",
  auth.validateToken,
  transactionController.getTransactions
);
router.get(
  "/transactions/:id",
  auth.validateToken,
  transactionController.getTransaction
);
router.post(
  "/transactions/create",
  auth.validateToken,
  transactionController.createTransaction
);
router.put(
  "/transactions/update/:id",
  auth.validateToken,
  transactionController.updateTransaction
);
router.delete(
  "/transactions/delete/:id",
  auth.validateToken,
  transactionController.deleteTransaction
);

//CRUD ESTATUS
router.get("/statuses", statusController.getStatuses);
router.get("/statuses/:id", statusController.getStatus);
router.post("/statuses/create", statusController.createStatus);
router.put("/statuses/update/:id", statusController.updateStatus);
router.delete("/statuses/delete/:id", statusController.deleteStatus);

//CRUD HISTORIAL_MONEDA
router.get(
  "/currencies-history",
  auth.validateToken,
  currencyHistoryController.getCurrenciesHistory
);
router.get(
  "/currencies-history/:id",
  auth.validateToken,
  currencyHistoryController.getCurrencyHistory
);
router.post(
  "/currencies-history/create",
  currencyHistoryController.createCurrencyHistory
);
router.put(
  "/currencies-history/update/:id",
  currencyHistoryController.updateCurrencyHistory
);
router.delete(
  "/currencies-history/delete/:id",
  currencyHistoryController.deleteCurrencyHistory
);

//CRUD FEEDBACK
router.get("/feedbacks", auth.validateToken, feedbackController.getFeedbacks);
router.get(
  "/feedbacks/:id",
  auth.validateToken,
  feedbackController.getFeedback
);
router.post(
  "/feedbacks/create",
  auth.validateToken,
  feedbackController.createFeedback
);
router.put(
  "/feedbacks/update/:id",
  auth.validateToken,
  feedbackController.updateFeedback
);
router.delete(
  "/feedbacks/delete/:id",
  auth.validateToken,
  feedbackController.deleteFeedback
);

//CRUD LUGAR
router.get("/places", placeController.getPlaces);
router.get("/places/:id", placeController.getPlace);
router.post("/places/create", placeController.createPlace);
router.put("/places/update/:id", placeController.updatePlace);
router.delete("/places/delete/:id", placeController.deletePlace);

//CRUD PROFILE
router.get("/profiles", auth.validateToken, profileController.getProfiles);
router.get("/profiles/:id", auth.validateToken, profileController.getProfile);
router.post(
  "/profiles/create",
  auth.validateToken,
  profileController.createProfile
);
router.put(
  "/profiles/update/:id",
  auth.validateToken,
  profileController.updateProfile
);
router.delete(
  "/profiles/delete/:id",
  auth.validateToken,
  profileController.deleteProfile
);

//CRUD CATEGORY
router.get("/categories", categoryController.getCategories);
router.get("/categories/:id", categoryController.getCategory);
router.post("/categories/create", categoryController.createCategory);
router.put("/categories/update/:id", categoryController.updateCategory);
router.delete("/categories/delete/:id", categoryController.deleteCategory);

module.exports = router;

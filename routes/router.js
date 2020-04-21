const express = require("express");
const router = express.Router();
const bankController = require("../domains/bank/bank-controller.js");
const userController = require("../domains/user/user-controller.js");
const currencyController = require("../domains/currency/currency-controller.js");
const accountController = require("../domains/account/account-controller.js");
const transactionController = require("../domains/transaction/transaction-controller.js");
const statusController = require("../domains/status/status-controller.js");
const currencyHistoryController = require("../domains/currency_history/currency-history-controller.js");
const feedbackController = require("../domains/feedback/feedback-controller.js");
const placeController = require("../domains/place/place-controller.js");
const profileController = require("../domains/profile/profile-controller.js");
const categoryController = require("../domains/category/category-controller.js");
const auth = require("../services/auth.js");
const snake = require("../services/snakeCase.js");

//CRUD USUARIO
router.get("/users", auth.validateToken, userController.getUsers);
router.get("/users/:id", auth.validateToken, userController.getUser);
router.post(
  "/users/create",
  snake.convertToSnakeCase,
  userController.createUser
);
router.put(
  "/users/update/:id",
  auth.validateToken,
  snake.convertToSnakeCase,
  userController.updateUser
);
router.put(
  "/users/change-status/:id",
  auth.validateToken,
  snake.convertToSnakeCase,
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
router.post(
  "/banks/create",
  snake.convertToSnakeCase,
  bankController.createBank
);
router.put(
  "/banks/update/:id",
  snake.convertToSnakeCase,
  bankController.updateBank
);
router.delete("/banks/delete/:id", bankController.deleteBank);

//CRUD MONEDA
router.get("/currencies", currencyController.getCurrencies);
router.get("/currencies/:id", currencyController.getCurrency);
router.post(
  "/currencies/create",
  snake.convertToSnakeCase,
  currencyController.createCurrency
);
router.put(
  "/currencies/update/aode",
  snake.convertToSnakeCase,
  currencyController.updateAODECurrency
);
router.delete("/currencies/delete/:id", currencyController.deleteCurrency);

//CRUD CUENTA
router.get("/accounts", auth.validateToken, accountController.getAccounts);
router.get("/accounts/:id", auth.validateToken, accountController.getAccount);
router.post(
  "/accounts/create",
  auth.validateToken,
  snake.convertToSnakeCase,
  accountController.createAccount
);
router.put(
  "/accounts/update/:id",
  auth.validateToken,
  snake.convertToSnakeCase,
  accountController.updateAccount
);
router.put(
  "/accounts/change-status/:id",
  auth.validateToken,
  snake.convertToSnakeCase,
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
  snake.convertToSnakeCase,
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
router.post(
  "/statuses/create",
  snake.convertToSnakeCase,
  statusController.createStatus
);
router.put(
  "/statuses/update/:id",
  snake.convertToSnakeCase,
  statusController.updateStatus
);
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
  snake.convertToSnakeCase,
  currencyHistoryController.createCurrencyHistory
);
router.put(
  "/currencies-history/update/:id",
  snake.convertToSnakeCase,
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
  snake.convertToSnakeCase,
  feedbackController.createFeedback
);
router.put(
  "/feedbacks/update/:id",
  auth.validateToken,
  snake.convertToSnakeCase,
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
router.post(
  "/places/create",
  snake.convertToSnakeCase,
  placeController.createPlace
);
router.put(
  "/places/update/:id",
  snake.convertToSnakeCase,
  placeController.updatePlace
);
router.delete("/places/delete/:id", placeController.deletePlace);

//CRUD PROFILE
router.get("/profiles", auth.validateToken, profileController.getProfiles);
router.get("/profiles/:id", auth.validateToken, profileController.getProfile);
router.post(
  "/profiles/create",
  auth.validateToken,
  snake.convertToSnakeCase,
  profileController.createProfile
);
router.put(
  "/profiles/update/:id",
  auth.validateToken,
  snake.convertToSnakeCase,
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
router.post(
  "/categories/create",
  snake.convertToSnakeCase,
  categoryController.createCategory
);
router.put(
  "/categories/update/:id",
  snake.convertToSnakeCase,
  categoryController.updateCategory
);
router.delete("/categories/delete/:id", categoryController.deleteCategory);

module.exports = router;

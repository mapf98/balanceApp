const transactionModels = require("../../models/transaction/transaction-models.js");
const createError = require("http-errors");

module.exports = {
  getTransactions: async function(req, res, next) {
    let results = await transactionModels.getTransactions(req.con);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  getTransaction: async function(req, res, next) {
    let results = await transactionModels.getTransaction(
      req.con,
      req.params.id
    );
    if (results.length === 0) {
      next(createError(404, "Recurso NotFound"));
    } else if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  createTransaction: async function(req, res, next) {
    let results = await transactionModels.createTransaction(req.con, req.body);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ status: "200", returning_id: results[0].transaction_id });
    }
  },
  updateTransaction: async function(req, res, next) {
    let results = await transactionModels.updateTransaction(
      req.con,
      req.params.id,
      req.body
    );
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  },
  deleteTransaction: async function(req, res, next) {
    let results = await transactionModels.deleteTransaction(
      req.con,
      req.params.id
    );
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  }
};

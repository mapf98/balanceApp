const transactionModels = require("../../models/transaction/transaction-models.js");

module.exports = {
  getTransactions: function(req, res, next) {
    let transactions = [];
    transactionModels.getTransactions(req.con, function(error, results) {
      transactions = results;
      res.json({ data: transactions });
    });
  },
  getTransaction: function(req, res, next) {
    transactionModels.getTransaction(req.con, req.params.id, function(
      error,
      results
    ) {
      let transaction = {};
      if (error || results.length == 0) {
        next(error);
      } else {
        transaction = results;
        res.json({ data: transaction });
      }
    });
  },
  createTransaction: function(req, res, next) {
    transactionModels.createTransaction(req.con, req.body, function(
      error,
      results
    ) {
      if (error) {
        next(error);
      } else {
        res.json({ status: "200", returning_id: results.insertId });
      }
    });
  },
  updateTransaction: function(req, res, next) {
    transactionModels.updateTransaction(
      req.con,
      req.params.id,
      req.body,
      function(error) {
        if (error) {
          next(error);
        } else {
          res.sendStatus("200");
        }
      }
    );
  },
  deleteTransaction: function(req, res, next) {
    transactionModels.deleteTransaction(req.con, req.params.id, function(
      error
    ) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

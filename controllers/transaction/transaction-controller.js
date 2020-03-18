const transactionModels = require("../../models/transaction/transaction-models.js");

module.exports = {
  getTransactions: function(req, res) {
    let transactions = [];
    transactionModels.getTransactions(req.con, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        transactions = results;
        res.json({ data: transactions });
      }
    });
  },
  getTransaction: function(req, res) {
    transactionModels.getTransaction(req.con, req.params.id, function(
      error,
      results
    ) {
      let transaction = {};
      if (error) {
        res.send(error);
      } else {
        transaction = results;
        res.json({ data: transaction });
      }
    });
  },
  createTransaction: function(req, res) {
    transactionModels.createTransaction(req.con, req.body, function(
      error,
      results
    ) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateTransaction: function(req, res) {
    transactionModels.updateTransaction(
      req.con,
      req.params.id,
      req.body,
      function(error, results) {
        if (error) {
          res.send(error);
        } else {
          res.sendStatus("200");
        }
      }
    );
  },
  deleteTransaction: function(req, res) {
    transactionModels.deleteTransaction(req.con, req.params.id, function(
      error,
      results
    ) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

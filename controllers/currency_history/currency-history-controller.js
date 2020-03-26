const currencyHistoryModels = require("../../models/currency_history/currency-history-models.js");

module.exports = {
  getCurrenciesHistory: function(req, res, next) {
    let currenciesHistory = [];
    currencyHistoryModels.getCurrenciesHistory(req.con, function(
      error,
      results
    ) {
      currenciesHistory = results;
      res.json({ data: currenciesHistory });
    });
  },
  getCurrencyHistory: function(req, res, next) {
    currencyHistoryModels.getCurrencyHistory(req.con, req.params.id, function(
      error,
      results
    ) {
      let currencyHistory = {};
      if (error || results.length == 0) {
        next(error);
      } else {
        currencyHistory = results;
        res.json({ data: currencyHistory });
      }
    });
  },
  createCurrencyHistory: function(req, res, next) {
    currencyHistoryModels.createCurrencyHistory(req.con, req.body, function(
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
  updateCurrencyHistory: function(req, res, next) {
    currencyHistoryModels.updateCurrencyHistory(
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
  deleteCurrencyHistory: function(req, res, next) {
    currencyHistoryModels.deleteCurrencyHistory(
      req.con,
      req.params.id,
      function(error, results) {
        if (error || results.affectedRows == 0) {
          next(error);
        } else {
          res.sendStatus("200");
        }
      }
    );
  }
};

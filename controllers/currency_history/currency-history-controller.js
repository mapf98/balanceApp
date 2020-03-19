const currencyHistoryModels = require("../../models/currency_history/currency-history-models.js");

module.exports = {
  getCurrenciesHistory: function(req, res) {
    let currenciesHistory = [];
    currencyHistoryModels.getCurrenciesHistory(req.con, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        currenciesHistory = results;
        res.json({ data: currenciesHistory });
      }
    });
  },
  getCurrencyHistory: function(req, res) {
    currencyHistoryModels.getCurrencyHistory(req.con, req.params.id, function(
      error,
      results
    ) {
      let currencyHistory = {};
      if (error) {
        res.send(error);
      } else {
        currencyHistory = results;
        res.json({ data: currencyHistory });
      }
    });
  },
  createCurrencyHistory: function(req, res) {
    currencyHistoryModels.createCurrencyHistory(req.con, req.body, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateCurrencyHistory: function(req, res) {
    currencyHistoryModels.updateCurrencyHistory(req.con, req.params.id, req.body, function(
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
  deleteCurrencyHistory: function(req, res) {
    currencyHistoryModels.deleteCurrencyHistory(req.con, req.params.id, function(
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

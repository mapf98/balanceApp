const currencyModels = require("../../models/currency/currency-models.js");

module.exports = {
  getCurrencies: function(req, res) {
    let currencies = [];
    currencyModels.getCurrencies(req.con, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        currencies = results;
        res.json({ data: currencies });
      }
    });
  },
  getCurrency: function(req, res) {
    currencyModels.getCurrency(req.con, req.params.id, function(
      error,
      results
    ) {
      let currency = {};
      if (error) {
        res.send(error);
      } else {
        currency = results;
        res.json({ data: currency });
      }
    });
  },
  createCurrency: function(req, res) {
    currencyModels.createCurrency(req.con, req.body, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateCurrency: function(req, res) {
    currencyModels.updateCurrency(req.con, req.params.id, req.body, function(
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
  deleteCurrency: function(req, res) {
    currencyModels.deleteCurrency(req.con, req.params.id, function(
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

const currencyModels = require("../../models/currency/currency-models.js");

module.exports = {
  getCurrencies: function(req, res, next) {
    let currencies = [];
    currencyModels.getCurrencies(req.con, function(error, results) {
      if (error) {
        next(error);
      } else {
        currencies = results;
        res.json({ data: currencies });
      }
    });
  },
  getCurrency: function(req, res, next) {
    currencyModels.getCurrency(req.con, req.params.id, function(
      error,
      results
    ) {
      let currency = {};
      if (error) {
        next(error);
      } else {
        currency = results;
        res.json({ data: currency });
      }
    });
  },
  createCurrency: function(req, res, next) {
    currencyModels.createCurrency(req.con, req.body, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateCurrency: function(req, res, next) {
    currencyModels.updateCurrency(req.con, req.params.id, req.body, function(
      error
    ) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  deleteCurrency: function(req, res, next) {
    currencyModels.deleteCurrency(req.con, req.params.id, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

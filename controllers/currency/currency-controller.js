const currencyModels = require("../../models/currency/currency-models.js");

module.exports = {
  getCurrencies: function(req, res, next) {
    let currencies = [];
    currencyModels.getCurrencies(req.con, function(error, results) {
      currencies = results;
      res.json({ data: currencies });
    });
  },
  getCurrency: function(req, res, next) {
    currencyModels.getCurrency(req.con, req.params.id, function(
      error,
      results
    ) {
      let currency = {};
      if (error || results.length == 0) {
        next(error);
      } else {
        currency = results;
        res.json({ data: currency });
      }
    });
  },
  createCurrency: function(req, res, next) {
    currencyModels.createCurrency(req.con, req.body, function(error, results) {
      if (error) {
        next(error);
      } else {
        res.json({ status: "200", returning_id: results.insertId });
      }
    });
  },
  updateAODECurrency: function(req, res, next) {
    currencyModels.updateAODECurrency(req.con, req.body, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  deleteCurrency: function(req, res, next) {
    currencyModels.deleteCurrency(req.con, req.params.id, function(
      error,
      results
    ) {
      if (error || results.affectedRows == 0) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

const currencyModels = require("../currency/currency-models.js");
const createError = require("http-errors");

module.exports = {
  getCurrencies: async function(req, res, next) {
    let results = await currencyModels.getCurrencies(req.con);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  getCurrency: async function(req, res, next) {
    let results = await currencyModels.getCurrency(req.con, req.params.id);
    if (results.length === 0) {
      next(createError(404, "Recurso NotFound"));
    } else if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  createCurrency: async function(req, res, next) {
    let results = await currencyModels.createCurrency(req.con, req.body);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ status: "200", returning_id: results[0].currency_id });
    }
  },
  updateAODECurrency: async function(req, res, next) {
    let results = await currencyModels.updateAODECurrency(req.con, req.body);
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  },
  deleteCurrency: async function(req, res, next) {
    let results = await currencyModels.deleteCurrency(req.con, req.params.id);
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  }
};

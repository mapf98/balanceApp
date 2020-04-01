const currencyHistoryModels = require("../../models/currency_history/currency-history-models.js");
const createError = require("http-errors");

module.exports = {
  getCurrenciesHistory: async function(req, res, next) {
    let results = await currencyHistoryModels.getCurrenciesHistory(req.con);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  getCurrencyHistory: async function(req, res, next) {
    let results = await currencyHistoryModels.getCurrencyHistory(
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
  createCurrencyHistory: async function(req, res, next) {
    let results = await currencyHistoryModels.createCurrencyHistory(
      req.con,
      req.body
    );
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ status: "200", returning_id: results[0].currency_history_id });
    }
  },
  updateCurrencyHistory: async function(req, res, next) {
    let results = await currencyHistoryModels.updateCurrencyHistory(
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
  deleteCurrencyHistory: async function(req, res, next) {
    let results = await currencyHistoryModels.deleteCurrencyHistory(
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

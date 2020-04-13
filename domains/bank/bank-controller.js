const bankModels = require("../bank/bank-models.js");
const createError = require("http-errors");

module.exports = {
  getBanks: async function(req, res, next) {
    let results = await bankModels.getBanks(req.con);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  getBank: async function(req, res, next) {
    let results = await bankModels.getBank(req.con, req.params.id);
    if (results.length === 0) {
      next(createError(404, "Recurso NotFound"));
    } else if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  createBank: async function(req, res, next) {
    let results = await bankModels.createBank(req.con, req.body);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ status: "200", returning_id: results[0].bank_id });
    }
  },
  updateBank: async function(req, res, next) {
    let results = await bankModels.updateBank(req.con, req.params.id, req.body);
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  },
  deleteBank: async function(req, res, next) {
    let results = await bankModels.deleteBank(req.con, req.params.id);
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  }
};

const accountModels = require("../../models/account/account-models.js");
const createError = require("http-errors");

module.exports = {
  getAccounts: async function(req, res) {
    let results = await accountModels.getAccounts(req.con);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  getAccount: async function(req, res, next) {
    let results = await accountModels.getAccount(req.con, req.params.id);
    if (results.length === 0) {
      next(createError(404, "Recurso NotFound"));
    } else if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  createAccount: async function(req, res, next) {
    let results = await accountModels.createAccount(req.con, req.body);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ status: "200", returning_id: results[0].account_id });
    }
  },
  updateAccount: async function(req, res, next) {
    let results = await accountModels.updateAccount(
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
  changeStatusAccount: async function(req, res, next) {
    let results = await accountModels.changeStatusAccount(
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
  deleteAccount: async function(req, res, next) {
    let results = await accountModels.deleteAccount(req.con, req.params.id);
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  }
};

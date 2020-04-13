const statusModels = require("../status/status-models.js");
const createError = require("http-errors");

module.exports = {
  getStatuses: async function(req, res, next) {
    let results = await statusModels.getStatuses(req.con);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  getStatus: async function(req, res, next) {
    let results = await statusModels.getStatus(req.con, req.params.id);
    if (results.length === 0) {
      next(createError(404, "Recurso NotFound"));
    } else if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  createStatus: async function(req, res, next) {
    let results = await statusModels.createStatus(req.con, req.body);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ status: "200", returning_id: results[0].status_id });
    }
  },
  updateStatus: async function(req, res, next) {
    let results = await statusModels.updateStatus(
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
  deleteStatus: async function(req, res, next) {
    let results = await statusModels.deleteStatus(req.con, req.params.id);
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  }
};

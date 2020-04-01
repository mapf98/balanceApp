const feedbackModels = require("../../models/feedback/feedback-models.js");
const createError = require("http-errors");

module.exports = {
  getFeedbacks: async function(req, res, next) {
    let results = await feedbackModels.getFeedbacks(req.con);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  getFeedback: async function(req, res, next) {
    let results = await feedbackModels.getFeedback(req.con, req.params.id);
    if (results.length === 0) {
      next(createError(404, "Recurso NotFound"));
    } else if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  createFeedback: async function(req, res, next) {
    let results = await feedbackModels.createFeedback(req.con, req.body);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ status: "200", returning_id: results[0].feedback_id });
    }
  },
  updateFeedback: async function(req, res, next) {
    let results = await feedbackModels.updateFeedback(
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
  deleteFeedback: async function(req, res, next) {
    let results = await feedbackModels.deleteFeedback(req.con, req.params.id);
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  }
};

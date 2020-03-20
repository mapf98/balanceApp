const feedbackModels = require("../../models/feedback/feedback-models.js");

module.exports = {
  getFeedbacks: function(req, res, next) {
    let feedbacks = [];
    feedbackModels.getFeedbacks(req.con, function(error, results) {
      if (error) {
        next(error);
      } else {
        feedbacks = results;
        res.json({ data: feedbacks });
      }
    });
  },
  getFeedback: function(req, res, next) {
    feedbackModels.getFeedback(req.con, req.params.id, function(
      error,
      results
    ) {
      let feedback = {};
      if (error) {
        next(error);
      } else {
        feedback = results;
        res.json({ data: feedback });
      }
    });
  },
  createFeedback: function(req, res, next) {
    feedbackModels.createFeedback(req.con, req.body, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateFeedback: function(req, res, next) {
    feedbackModels.updateFeedback(req.con, req.params.id, req.body, function(
      error
    ) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  deleteFeedback: function(req, res, next) {
    feedbackModels.deleteFeedback(req.con, req.params.id, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

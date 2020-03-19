const feedbackModels = require("../../models/feedback/feedback-models.js");

module.exports = {
  getFeedbacks: function(req, res) {
    let feedbacks = [];
    feedbackModels.getFeedbacks(req.con, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        feedbacks = results;
        res.json({ data: feedbacks });
      }
    });
  },
  getFeedback: function(req, res) {
    feedbackModels.getFeedback(req.con, req.params.id, function(error, results) {
      let feedback = {};
      if (error) {
        res.send(error);
      } else {
        feedback = results;
        res.json({ data: feedback });
      }
    });
  },
  createFeedback: function(req, res) {
    feedbackModels.createFeedback(req.con, req.body, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateFeedback: function(req, res) {
    feedbackModels.updateFeedback(req.con, req.params.id, req.body, function(
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
  deleteFeedback: function(req, res) {
    feedbackModels.deleteFeedback(req.con, req.params.id, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

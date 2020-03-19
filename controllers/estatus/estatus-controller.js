const statusModels = require("../../models/estatus/estatus-models.js");

module.exports = {
  getStatuses: function(req, res) {
    let statuses = [];
    statusModels.getStatuses(req.con, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        statuses = results;
        res.json({ data: statuses });
      }
    });
  },
  getStatus: function(req, res) {
    statusModels.getStatus(req.con, req.params.id, function(error, results) {
      let status = {};
      if (error) {
        res.send(error);
      } else {
        status = results;
        res.json({ data: status });
      }
    });
  },
  createStatus: function(req, res) {
    statusModels.createStatus(req.con, req.body, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateStatus: function(req, res) {
    statusModels.updateStatus(req.con, req.params.id, req.body, function(
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
  deleteStatus: function(req, res) {
    statusModels.deleteStatus(req.con, req.params.id, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

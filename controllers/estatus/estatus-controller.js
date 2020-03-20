const statusModels = require("../../models/estatus/estatus-models.js");

module.exports = {
  getStatuses: function(req, res, next) {
    let statuses = [];
    statusModels.getStatuses(req.con, function(error, results) {
      if (error) {
        next(error);
      } else {
        statuses = results;
        res.json({ data: statuses });
      }
    });
  },
  getStatus: function(req, res, next) {
    statusModels.getStatus(req.con, req.params.id, function(error, results) {
      let status = {};
      if (error) {
        next(error);
      } else {
        status = results;
        res.json({ data: status });
      }
    });
  },
  createStatus: function(req, res, next) {
    statusModels.createStatus(req.con, req.body, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateStatus: function(req, res, next) {
    statusModels.updateStatus(req.con, req.params.id, req.body, function(
      error
    ) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  deleteStatus: function(req, res, next) {
    statusModels.deleteStatus(req.con, req.params.id, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

const bankModels = require("../../models/bank/bank-models.js");

module.exports = {
  getBanks: function(req, res, next) {
    let banks = [];
    bankModels.getBanks(req.con, function(error, results) {
      banks = results;
      res.json({ data: banks });
    });
  },
  getBank: function(req, res, next) {
    bankModels.getBank(req.con, req.params.id, function(error, results) {
      let bank = {};
      if (error || results.length == 0) {
        next(error);
      } else {
        bank = results;
        res.json({ data: bank });
      }
    });
  },
  createBank: function(req, res, next) {
    bankModels.createBank(req.con, req.body, function(error, results) {
      if (error) {
        next(error);
      } else {
        res.json({ status: "200", returning_id: results.insertId });
      }
    });
  },
  updateBank: function(req, res, next) {
    bankModels.updateBank(req.con, req.params.id, req.body, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  deleteBank: function(req, res, next) {
    bankModels.deleteBank(req.con, req.params.id, function(error, results) {
      if (error || results.affectedRows == 0) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

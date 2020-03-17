const bankModels = require("../../models/bank/bank-models.js");

module.exports = {
  getBanks: function(req, res) {
    let banks = [];
    bankModels.getBanks(req.con, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        banks = results;
        res.json({ data: banks });
      }
    });
  },
  getBank: function(req, res) {
    bankModels.getBank(req.con, req.params.id, function(error, results) {
      let bank = {};
      if (error) {
        res.send(error);
      } else {
        bank = results;
        res.json({ data: bank });
      }
    });
  },
  createBank: function(req, res) {
    bankModels.createBank(req.con, req.body, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateBank: function(req, res) {
    bankModels.updateBank(req.con, req.params.id, req.body, function(
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
  deleteBank: function(req, res) {
    bankModels.deleteBank(req.con, req.params.id, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

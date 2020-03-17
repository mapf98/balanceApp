const accountModels = require("../../models/account/account-models.js");

module.exports = {
  getAccounts: function(req, res) {
    let accounts = [];
    accountModels.getAccounts(req.con, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        accounts = results;
        res.json({ data: accounts });
      }
    });
  },
  getAccount: function(req, res) {
    accountModels.getAccount(req.con, req.params.id, function(error, results) {
      let account = {};
      if (error) {
        res.send(error);
      } else {
        account = results;
        res.json({ data: account });
      }
    });
  },
  createAccount: function(req, res) {
    accountModels.createAccount(req.con, req.body, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateAccount: function(req, res) {
    accountModels.updateAccount(req.con, req.params.id, req.body, function(
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
  deleteAccount: function(req, res) {
    accountModels.deleteAccount(req.con, req.params.id, function(
      error,
      results
    ) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

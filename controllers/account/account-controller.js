const accountModels = require("../../models/account/account-models.js");

module.exports = {
  getAccounts: function(req, res, next) {
    let accounts = [];
    accountModels.getAccounts(req.con, function(error, results) {
      if (error) {
        next(error);
      } else {
        accounts = results;
        res.json({ data: accounts });
      }
    });
  },
  getAccount: function(req, res, next) {
    accountModels.getAccount(req.con, req.params.id, function(error, results) {
      let account = {};
      if (error) {
        next(error);
      } else {
        account = results;
        res.json({ data: account });
      }
    });
  },
  createAccount: function(req, res, next) {
    accountModels.createAccount(req.con, req.body, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateAccount: function(req, res, next) {
    accountModels.updateAccount(req.con, req.params.id, req.body, function(
      error
    ) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  deleteAccount: function(req, res, next) {
    accountModels.deleteAccount(req.con, req.params.id, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

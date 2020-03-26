const accountModels = require("../../models/account/account-models.js");

module.exports = {
  getAccounts: function(req, res) {
    let accounts = [];
    accountModels.getAccounts(req.con, function(error, results) {
      accounts = results;
      res.json({ data: accounts });
    });
  },
  getAccount: function(req, res, next) {
    accountModels.getAccount(req.con, req.params.id, function(error, results) {
      let account = {};
      if (error || results.length == 0) {
        next(error);
      } else {
        account = results;
        res.json({ data: account });
      }
    });
  },
  createAccount: function(req, res, next) {
    accountModels.createAccount(req.con, req.body, function(error, results) {
      if (error) {
        next(error);
      } else {
        res.json({ status: "200", returning_id: results.insertId });
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
  changeStatusAccount: function(req, res, next) {
    accountModels.changeStatusAccount(
      req.con,
      req.params.id,
      req.body,
      function(error) {
        if (error) {
          next(error);
        } else {
          res.sendStatus("200");
        }
      }
    );
  },
  deleteAccount: function(req, res, next) {
    accountModels.deleteAccount(req.con, req.params.id, function(
      error,
      results
    ) {
      if (error || results.affectedRows == 0) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

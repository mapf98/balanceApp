const userModels = require("../../models/user/user-models.js");
const auth = require("../../services/auth.js");

module.exports = {
  getUsers: function(req, res, next) {
    let users = [];
    userModels.getUsers(req.con, function(error, results) {
      users = results;
      res.json({ data: users });
    });
  },
  getUser: function(req, res, next) {
    userModels.getUser(req.con, req.params.id, function(error, results) {
      let user = {};
      if (error || results.length == 0) {
        next(error);
      } else {
        user = results;
        res.json({ data: user });
      }
    });
  },
  createUser: function(req, res, next) {
    userModels.createUser(req.con, req.body, function(error, results) {
      if (error) {
        next(error);
      } else {
        const token = auth.createToken(results.insertId);
        res.json({
          status: "200",
          token: token,
          returning_id: results.insertId
        });
      }
    });
  },
  updateUser: function(req, res, next) {
    userModels.updateUser(req.con, req.params.id, req.body, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  changeStatusUser: function(req, res, next) {
    userModels.changeStatusUser(req.con, req.params.id, req.body, function(
      error
    ) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  deleteUser: function(req, res, next) {
    userModels.deleteUser(req.con, req.params.id, function(error, results) {
      if (error || results.affectedRows == 0) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

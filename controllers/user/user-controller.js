const userModels = require("../../models/user/user-models.js");

module.exports = {
  getUsers: function(req, res, next) {
    let users = [];
    userModels.getUsers(req.con, function(error, results) {
      if (error) {
        next(error);
      } else {
        users = results;
        res.json({ data: users });
      }
    });
  },
  getUser: function(req, res, next) {
    userModels.getUser(req.con, req.params.id, function(error, results) {
      let user = {};
      if (error) {
        next(error);
      } else {
        user = results;
        res.json({ data: user });
      }
    });
  },
  createUser: function(req, res, next) {
    userModels.createUser(req.con, req.body, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
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
  deleteUser: function(req, res, next) {
    userModels.deleteUser(req.con, req.params.id, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

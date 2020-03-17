const userModels = require("../../models/user/user-models.js");

module.exports = {
  getUsers: function(req, res) {
    let users = [];
    userModels.getUsers(req.con, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        users = results;
        res.json({ data: users });
      }
    });
  },
  getUser: function(req, res) {
    userModels.getUser(req.con, req.params.id, function(error, results) {
      let user = {};
      if (error) {
        res.send(error);
      } else {
        user = results;
        res.json({ data: user });
      }
    });
  },
  createUser: function(req, res) {
    userModels.createUser(req.con, req.body, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateUser: function(req, res) {
    userModels.updateUser(req.con, req.params.id, req.body, function(
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
  deleteUser: function(req, res) {
    userModels.deleteUser(req.con, req.params.id, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

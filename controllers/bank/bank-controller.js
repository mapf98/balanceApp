const bankModels = require("../../models/bank/bank-models.js");

module.exports = {
  getUsers: function(req, res) {
    let usuarios = [];
    models.getUsers(req.con, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        usuarios = results;
        res.json({ data: usuarios });
      }
    });
  },
  getUserById: function(req, res) {
    models.getUserById(req.con, req.params.id, function(error, results) {
      let usuarios = {};
      if (error) {
        res.send(error);
      } else {
        usuario = results;
        res.json({ data: usuario });
      }
    });
  },
  createUser: function(req, res) {
    models.createUser(req.con, req.body, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

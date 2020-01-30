const models = require("../models/models.js");

module.exports = {
  getUsers: function (req, res) {
    let usuarios = [];
    models.getUsers(req.con, function (error, results) {
      if (error) {
        res.send(error);
      } else {
        usuarios = results;
        res.json({ data: usuarios });
      }
    });
  },

  /*create: function(req, res) {
    res.render("biodata/create");
  },

  store: function(req, res) {
    Biodata.create(req.con, req.body, function(err) {
      res.redirect("/biodata");
    });
  },

  edit: function(req, res) {
    Biodata.getById(req.con, req.params.id, function(err, rows) {
      res.render("biodata/edit", { data: rows[0] });
    });
  },

  update: function(req, res) {
    Biodata.update(req.con, req.body, req.params.id, function(err) {
      res.redirect("/biodata");
    });
  },

  destroy: function(req, res) {
    Biodata.destroy(req.con, req.params.id, function(err) {
      res.redirect("/biodata");
    });
  }*/
};
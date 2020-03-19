const categoryModels = require("../../models/category/category-models.js");

module.exports = {
  getCategories: function(req, res) {
    let categories = [];
    categoryModels.getCategories(req.con, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        categories = results;
        res.json({ data: categories });
      }
    });
  },
  getCategory: function(req, res) {
    categoryModels.getCategory(req.con, req.params.id, function(error, results) {
      let category = {};
      if (error) {
        res.send(error);
      } else {
        category = results;
        res.json({ data: category });
      }
    });
  },
  createCategory: function(req, res) {
    categoryModels.createCategory(req.con, req.body, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateCategory: function(req, res) {
    categoryModels.updateCategory(req.con, req.params.id, req.body, function(
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
  deleteCategory: function(req, res) {
    categoryModels.deleteCategory(req.con, req.params.id, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

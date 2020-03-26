const categoryModels = require("../../models/category/category-models.js");

module.exports = {
  getCategories: function(req, res, next) {
    let categories = [];
    categoryModels.getCategories(req.con, function(error, results) {
      categories = results;
      res.json({ data: categories });
    });
  },
  getCategory: function(req, res, next) {
    categoryModels.getCategory(req.con, req.params.id, function(
      error,
      results
    ) {
      let category = {};
      if (error || results.length == 0) {
        next(error);
      } else {
        category = results;
        res.json({ data: category });
      }
    });
  },
  createCategory: function(req, res, next) {
    categoryModels.createCategory(req.con, req.body, function(error, results) {
      if (error) {
        next(error);
      } else {
        res.json({ status: "200", returning_id: results.insertId });
      }
    });
  },
  updateCategory: function(req, res, next) {
    categoryModels.updateCategory(req.con, req.params.id, req.body, function(
      error
    ) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  deleteCategory: function(req, res, next) {
    categoryModels.deleteCategory(req.con, req.params.id, function(
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

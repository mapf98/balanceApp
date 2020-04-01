const categoryModels = require("../../models/category/category-models.js");
const createError = require("http-errors");

module.exports = {
  getCategories: async function(req, res, next) {
    let results = await categoryModels.getCategories(req.con);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  getCategory: async function(req, res, next) {
    let results = await categoryModels.getCategory(req.con, req.params.id);
    if (results.length === 0) {
      next(createError(404, "Recurso NotFound"));
    } else if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  createCategory: async function(req, res, next) {
    let results = await categoryModels.createCategory(req.con, req.body);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ status: "200", returning_id: results[0].category_id });
    }
  },
  updateCategory: async function(req, res, next) {
    let results = await categoryModels.updateCategory(
      req.con,
      req.params.id,
      req.body
    );
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  },
  deleteCategory: async function(req, res, next) {
    let results = await categoryModels.deleteCategory(req.con, req.params.id);
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  }
};

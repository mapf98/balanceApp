const userModels = require("../../models/user/user-models.js");
const auth = require("../../services/auth.js");
const createError = require("http-errors");

module.exports = {
  getUsers: async function(req, res, next) {
    let results = await userModels.getUsers(req.con);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  getUser: async function(req, res, next) {
    let results = await userModels.getUser(req.con, req.params.id);
    if (results.length === 0) {
      next(createError(404, "Recurso NotFound"));
    } else if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  createUser: async function(req, res, next) {
    let results = await userModels.createUser(req.con, req.body);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      const token = auth.createToken(results[0].user_id);
      res.json({
        status: "200",
        token: token,
        returning_id: results[0].user_id
      });
    }
  },
  updateUser: async function(req, res, next) {
    let results = await userModels.updateUser(req.con, req.params.id, req.body);
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  },
  changeStatusUser: async function(req, res, next) {
    let results = await userModels.changeStatusUser(
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
  deleteUser: async function(req, res, next) {
    let results = await userModels.deleteUser(req.con, req.params.id);
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  }
};

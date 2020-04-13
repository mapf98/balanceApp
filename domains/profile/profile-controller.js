const profileModels = require("../profile/profile-models.js");
const createError = require("http-errors");

module.exports = {
  getProfiles: async function(req, res, next) {
    let results = await profileModels.getProfiles(req.con);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  getProfile: async function(req, res, next) {
    let results = await profileModels.getProfile(req.con, req.params.id);
    if (results.length === 0) {
      next(createError(404, "Recurso NotFound"));
    } else if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  createProfile: async function(req, res, next) {
    let results = await profileModels.createProfile(req.con, req.body);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ status: "200", returning_id: results[0].profile_id });
    }
  },
  updateProfile: async function(req, res, next) {
    let results = await profileModels.updateProfile(
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
  deleteProfile: async function(req, res, next) {
    let results = await profileModels.deleteProfile(req.con, req.params.id);
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  }
};

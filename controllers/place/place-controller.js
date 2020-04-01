const placeModels = require("../../models/place/place-models.js");
const createError = require("http-errors");

module.exports = {
  getPlaces: async function(req, res, next) {
    let results = await placeModels.getPlaces(req.con);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  getPlace: async function(req, res, next) {
    let results = await placeModels.getPlace(req.con, req.params.id);
    if (results.length === 0) {
      next(createError(404, "Recurso NotFound"));
    } else if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ data: results });
    }
  },
  createPlace: async function(req, res, next) {
    let results = await placeModels.createPlace(req.con, req.body);
    if (results instanceof Error) {
      next(createError(500, `${results.message}`));
    } else {
      res.json({ status: "200", returning_id: results[0].place_id });
    }
  },
  updatePlace: async function(req, res, next) {
    let results = await placeModels.updatePlace(
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
  deletePlace: async function(req, res, next) {
    let results = await placeModels.deletePlace(req.con, req.params.id);
    if (results instanceof Error || results.rowCount == 0) {
      next(createError(500, `${results.message}`));
    } else {
      res.sendStatus("200");
    }
  }
};

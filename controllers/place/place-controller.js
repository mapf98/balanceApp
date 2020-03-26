const placeModels = require("../../models/place/place-models.js");

module.exports = {
  getPlaces: function(req, res, next) {
    let places = [];
    placeModels.getPlaces(req.con, function(error, results) {
      places = results;
      res.json({ data: places });
    });
  },
  getPlace: function(req, res, next) {
    placeModels.getPlace(req.con, req.params.id, function(error, results) {
      let place = {};
      if (error || results.length == 0) {
        next(error);
      } else {
        place = results;
        res.json({ data: place });
      }
    });
  },
  createPlace: function(req, res, next) {
    placeModels.createPlace(req.con, req.body, function(error, results) {
      if (error) {
        next(error);
      } else {
        res.json({ status: "200", returning_id: results.insertId });
      }
    });
  },
  updatePlace: function(req, res, next) {
    placeModels.updatePlace(req.con, req.params.id, req.body, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  deletePlace: function(req, res, next) {
    placeModels.deletePlace(req.con, req.params.id, function(error, results) {
      if (error || results.affectedRows == 0) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

const placeModels = require("../../models/place/place-models.js");

module.exports = {
  getPlaces: function(req, res) {
    let places = [];
    placeModels.getPlaces(req.con, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        places = results;
        res.json({ data: places });
      }
    });
  },
  getPlace: function(req, res) {
    placeModels.getPlace(req.con, req.params.id, function(error, results) {
      let place = {};
      if (error) {
        res.send(error);
      } else {
        place = results;
        res.json({ data: place });
      }
    });
  },
  createPlace: function(req, res) {
    placeModels.createPlace(req.con, req.body, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updatePlace: function(req, res) {
    placeModels.updatePlace(req.con, req.params.id, req.body, function(
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
  deletePlace: function(req, res) {
    placeModels.deletePlace(req.con, req.params.id, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

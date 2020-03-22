const profileModels = require("../../models/profile/profile-models.js");

module.exports = {
  getProfiles: function(req, res, next) {
    let profiles = [];
    profileModels.getProfiles(req.con, function(error, results) {
      profiles = results;
      res.json({ data: profiles });
    });
  },
  getProfile: function(req, res, next) {
    profileModels.getProfile(req.con, req.params.id, function(error, results) {
      let profile = {};
      if (error || results.length == 0) {
        next(error);
      } else {
        profile = results;
        res.json({ data: profile });
      }
    });
  },
  createProfile: function(req, res, next) {
    profileModels.createProfile(req.con, req.body, function(error, results) {
      if (error) {
        next(error);
      } else {
        res.json({ status: "200", returning_id: results.insertId });
      }
    });
  },
  updateProfile: function(req, res, next) {
    profileModels.updateProfile(req.con, req.params.id, req.body, function(
      error
    ) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  deleteProfile: function(req, res, next) {
    profileModels.deleteProfile(req.con, req.params.id, function(error) {
      if (error) {
        next(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

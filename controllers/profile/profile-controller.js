const profileModels = require("../../models/profile/profile-models.js");

module.exports = {
  getProfiles: function(req, res) {
    let profiles = [];
    profileModels.getProfiles(req.con, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        profiles = results;
        res.json({ data: profiles });
      }
    });
  },
  getProfile: function(req, res) {
    profileModels.getProfile(req.con, req.params.id, function(error, results) {
      let profile = {};
      if (error) {
        res.send(error);
      } else {
        profile = results;
        res.json({ data: profile });
      }
    });
  },
  createProfile: function(req, res) {
    profileModels.createProfile(req.con, req.body, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  },
  updateProfile: function(req, res) {
    profileModels.updateProfile(req.con, req.params.id, req.body, function(
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
  deleteProfile: function(req, res) {
    profileModels.deleteProfile(req.con, req.params.id, function(error, results) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus("200");
      }
    });
  }
};

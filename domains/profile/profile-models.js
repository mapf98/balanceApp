module.exports = {
  getProfiles: function(con) {
    return con.query("SELECT * FROM PERFIL").catch(error => {
      return new Error(error);
    });
  },
  getProfile: function(con, id) {
    return con
      .query("SELECT * FROM PERFIL WHERE profile_id = $1", [id])
      .catch(error => {
        return new Error(error);
      });
  },
  createProfile: function(con, body) {
    return con
      .query(
        "INSERT INTO PERFIL (profile_name, profile_type, profile_create_date, fk_user_id) VALUES ($1, $2, $3, $4) RETURNING profile_id",
        [
          body.profile_name,
          body.profile_type,
          body.profile_create_date,
          body.fk_user_id
        ]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  updateProfile: function(con, id, body) {
    return con
      .result(
        "UPDATE PERFIL SET profile_name = $1, profile_type = $2, fk_user_id = $3 WHERE profile_id = $4;",
        [body.profile_name, body.profile_type, body.fk_user_id, id]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  deleteProfile: function(con, id) {
    return con
      .result("DELETE FROM PERFIL WHERE profile_id = $1;", [id])
      .catch(error => {
        return new Error(error);
      });
  }
};

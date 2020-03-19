module.exports = {
  getProfiles: function(con, callback) {
    con.query("SELECT * FROM PERFIL", callback);
  },
  getProfile: function(con, id, callback) {
    con.query("SELECT * FROM PERFIL WHERE profile_id = ? ", [id], callback);
  },
  createProfile: function(con, body, callback) {
    con.query(
      "INSERT INTO PERFIL (profile_name, profile_type, profile_create_date, fk_user_id) VALUES (?, ?, ?, ?);",
      [body.profile_name, body.profile_type, body.profile_create_date, body.fk_user_id],
      callback
    );
  },
  updateProfile: function(con, id, body, callback) {
    con.query(
      "UPDATE PERFIL SET profile_name = ?, profile_type = ?, profile_create_date = ?, fk_user_id = ? WHERE profile_id = ?;",
      [body.profile_name, body.profile_type, body.profile_create_date, body.fk_user_id, id],
      callback
    );
  },
  deleteProfile: function(con, id, callback) {
    con.query("DELETE FROM PERFIL WHERE profile_id = ?;", [id], callback);
  }
};

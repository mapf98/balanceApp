module.exports = {
  getUsers: function(con, callback) {
    con.query("SELECT * FROM USUARIO", callback);
  },
  getUser: function(con, id, callback) {
    con.query("SELECT * FROM USUARIO WHERE user_id = ? ", [id], callback);
  },
  createUser: function(con, body, callback) {
    con.query(
      "INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password) VALUES (?, ?, ?, ?, ?, ?);",
      [
        body.user_first_name,
        body.user_last_name,
        body.user_email,
        body.user_alias,
        body.user_birthdate,
        body.user_password
      ],
      callback
    );
  },
  updateUser: function(con, id, body, callback) {
    con.query(
      "UPDATE USUARIO SET user_first_name = ?, user_last_name = ?, user_email = ?, user_alias = ?, user_birthdate = ?, user_password = ? WHERE user_id = ?;",
      [
        body.user_first_name,
        body.user_last_name,
        body.user_email,
        body.user_alias,
        body.user_birthdate,
        body.user_password,
        id
      ],
      callback
    );
  },
  deleteUser: function(con, id, callback) {
    con.query("DELETE FROM USUARIO WHERE user_id = ?;", [id], callback);
  }
};

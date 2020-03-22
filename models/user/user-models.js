module.exports = {
  getUsers: function(con, callback) {
    con.query("SELECT * FROM USUARIO", callback);
  },
  getUser: function(con, id, callback) {
    con.query("SELECT * FROM USUARIO WHERE user_id = ? ", [id], callback);
  },
  createUser: function(con, body, callback) {
    con.query(
      "INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password, user_create_date, fk_status_id) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?);",
      [
        body.user_first_name,
        body.user_last_name,
        body.user_email,
        body.user_alias,
        body.user_birthdate,
        body.user_password,
        body.user_create_date,
        body.fk_status_id
      ],
      callback
    );
  },
  updateUser: function(con, id, body, callback) {
    con.query(
      "UPDATE USUARIO SET user_first_name = ?, user_last_name = ?, user_email = ?, user_alias = ?, user_birthdate = ?, user_password = ?, fk_status_id = ? WHERE user_id = ?;",
      [
        body.user_first_name,
        body.user_last_name,
        body.user_email,
        body.user_alias,
        body.user_birthdate,
        body.user_password,
        body.fk_status_id,
        id
      ],
      callback
    );
  },
  deleteUser: function(con, id, callback) {
    con.query(
      "UPDATE USUARIO SET fk_status_id = (SELECT status_id FROM ESTATUS WHERE status_name = ?) WHERE user_id = ? ;",
      ["REMOVE", id],
      callback
    );
  }
};

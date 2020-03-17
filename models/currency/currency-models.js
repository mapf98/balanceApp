module.exports = {
  getUsers: function(con, callback) {
    con.query("SELECT * FROM USUARIO", callback);
  },
  getUser: function(con, id, callback) {
    con.query("SELECT * FROM USUARIO WHERE user_id = ? ", [id], callback);
  },
  createUser: function(con, body, callback) {
    con.query(
      "INSERT INTO USUARIO (first_name, last_name, email, bd_date) VALUES (?, ?, ?, ?);",
      [body.first_name, body.last_name, body.email, body.bd_date],
      callback
    );
  },
  updateUser: function(con, id, body, callback) {
    con.query(
      "UPDATE USUARIO SET first_name = ?, last_name = ?, email = ?, bd_date = ? WHERE user_id = ?;",
      [body.first_name, body.last_name, body.email, body.bd_date, id],
      callback
    );
  },
  deleteUser: function(con, id, callback) {
    con.query("DELETE FROM USUARIO WHERE user_id = ?;", [id], callback);
  }
};

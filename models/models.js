module.exports = {
  getUsers: function(con, callback) {
    con.query("SELECT * FROM PERSONA", callback);
  },
  getUserById: function(con, id, callback) {
    con.query(
      "SELECT * FROM PERSONA AS personas WHERE ID = ? ",
      [id],
      callback
    );
  },
  createUser: function (con, body, callback) {
    con.query(
      "INSERT INTO PERSONA (NOMBRE, EDAD) VALUES (?, ?);",
      [body.nombre, body.edad],
      callback
    );
  }
};

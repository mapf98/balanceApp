module.exports = {
  getStatuses: function(con, callback) {
    con.query("SELECT * FROM ESTATUS", callback);
  },
  getStatus: function(con, id, callback) {
    con.query("SELECT * FROM ESTATUS WHERE status_id = ? ", [id], callback);
  },
  createStatus: function(con, body, callback) {
    con.query(
      "INSERT INTO ESTATUS (status_name) VALUES (?);",
      [body.status_name],
      callback
    );
  },
  updateStatus: function(con, id, body, callback) {
    con.query(
      "UPDATE ESTATUS SET status_name = ? WHERE status_id = ?;",
      [body.status_name, id],
      callback
    );
  },
  deleteStatus: function(con, id, callback) {
    con.query("DELETE FROM ESTATUS WHERE status_id = ?;", [id], callback);
  }
};

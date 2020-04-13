module.exports = {
  getStatuses: function(con) {
    return con.query("SELECT * FROM ESTATUS").catch(error => {
      return new Error(error);
    });
  },
  getStatus: function(con, id) {
    return con
      .query("SELECT * FROM ESTATUS WHERE status_id = $1 ", [id])
      .catch(error => {
        return new Error(error);
      });
  },
  createStatus: function(con, body) {
    return con
      .query(
        "INSERT INTO ESTATUS (status_name) VALUES ($1) RETURNING status_id",
        [body.status_name]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  updateStatus: function(con, id, body) {
    return con
      .result("UPDATE ESTATUS SET status_name = $1 WHERE status_id = $2;", [
        body.status_name,
        id
      ])
      .catch(error => {
        return new Error(error);
      });
  },
  deleteStatus: function(con, id, callback) {
    return con
      .result("DELETE FROM ESTATUS WHERE status_id = $1;", [id])
      .catch(error => {
        return new Error(error);
      });
  }
};

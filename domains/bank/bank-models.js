module.exports = {
  getBanks: function(con) {
    return con.query("SELECT * FROM BANCO").catch(error => {
      return new Error(error);
    });
  },
  getBank: function(con, id) {
    return con
      .query("SELECT * FROM BANCO WHERE bank_id = $1", [id])
      .catch(error => {
        return new Error(error);
      });
  },
  createBank: function(con, body) {
    return con
      .query(
        "INSERT INTO BANCO (bank_name, fk_place_id) VALUES ($1, $2) RETURNING bank_id",
        [body.bank_name, body.fk_place_id]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  updateBank: function(con, id, body) {
    return con
      .result(
        "UPDATE BANCO SET bank_name = $1, fk_place_id = $2 WHERE bank_id = $3;",
        [body.bank_name, body.fk_place_id, id]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  deleteBank: function(con, id) {
    return con
      .result("DELETE FROM BANCO WHERE bank_id = $1;", [id])
      .catch(error => {
        return new Error(error);
      });
  }
};

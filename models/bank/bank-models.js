module.exports = {
  getBanks: function(con, callback) {
    con.query("SELECT * FROM BANCO", callback);
  },
  getBank: function(con, id, callback) {
    con.query("SELECT * FROM BANCO WHERE bank_id = ? ", [id], callback);
  },
  createBank: function(con, body, callback) {
    con.query(
      "INSERT INTO BANCO (bank_name, fk_place_id) VALUES (?, ?);",
      [body.bank_name, body.fk_place_id],
      callback
    );
  },
  updateBank: function(con, id, body, callback) {
    con.query(
      "UPDATE BANCO SET bank_name = ?, fk_place_id = ? WHERE bank_id = ?;",
      [body.bank_name, body.fk_place_id, id],
      callback
    );
  },
  deleteBank: function(con, id, callback) {
    con.query("DELETE FROM BANCO WHERE bank_id = ?;", [id], callback);
  }
};

module.exports = {
  getBanks: function(con, callback) {
    con.query("SELECT * FROM BANCO", callback);
  },
  getBank: function(con, id, callback) {
    con.query("SELECT * FROM BANCO WHERE bank_id = ? ", [id], callback);
  },
  createBank: function(con, body, callback) {
    con.query(
      "INSERT INTO BANCO (bank_name) VALUES (?);",
      [body.bank_name],
      callback
    );
  },
  updateBank: function(con, id, body, callback) {
    con.query(
      "UPDATE BANCO SET bank_name = ? WHERE bank_id = ?;",
      [body.bank_name, id],
      callback
    );
  },
  deleteBank: function(con, id, callback) {
    con.query("DELETE FROM BANCO WHERE bank_id = ?;", [id], callback);
  }
};

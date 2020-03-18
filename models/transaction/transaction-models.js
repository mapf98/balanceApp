module.exports = {
  getTransactions: function(con, callback) {
    con.query("SELECT * FROM TRANSACCION", callback);
  },
  getTransaction: function(con, id, callback) {
    con.query("SELECT * FROM TRANSACCION WHERE transaction_id = ? ", [id], callback);
  },
  createTransaction: function(con, body, callback) {
    con.query(
      "INSERT INTO TRANSACCION (transaction_total, transaction_concept, transaction_date, fk_account_id) VALUES (?, ?, ?, ?);",
      [
        body.transaction_total,
        body.transaction_concept,
        body.transaction_date,
        body.fk_account_id
      ],
      callback
    );
  },
  updateTransaction: function(con, id, body, callback) {
    con.query(
      "UPDATE TRANSACCION SET transaction_total = ?, transaction_concept = ?, transaction_date = ?, fk_account_id = ? WHERE transaction_id = ?;",
      [
        body.transaction_total,
        body.transaction_concept,
        body.transaction_date,
        body.fk_account_id,
        id
      ],
      callback
    );
  },
  deleteTransaction: function(con, id, callback) {
    con.query("DELETE FROM TRANSACCION WHERE transaction_id = ?;", [id], callback);
  }
};

module.exports = {
  getTransactions: function(con, callback) {
    con.query("SELECT * FROM TRANSACCION", callback);
  },
  getTransaction: function(con, id, callback) {
    con.query("SELECT * FROM TRANSACCION WHERE transaction_id = ? ", [id], callback);
  },
  createTransaction: function(con, body, callback) {
    con.query(
      "INSERT INTO TRANSACCION (transaction_account_total, transaction_amount, transaction_concept, transaction_date, transaction_create_date, fk_account_id, fk_category_id) VALUES (?, ?, ?, ?, ?, ?, ?);",
      [
        body.transaction_account_total,
        body.transaction_amount,
        body.transaction_concept,
        body.transaction_date,
        body.transaction_create_date,
        body.fk_account_id,
        body.fk_category_id
      ],
      callback
    );
  },
  updateTransaction: function(con, id, body, callback) {
    con.query(
      "UPDATE TRANSACCION SET transaction_account_total = ?, transaction_amount = ?, transaction_concept = ?, transaction_date = ?, transaction_create_date = ?, fk_account_id = ?, fk_category_id = ? WHERE transaction_id = ?;",
      [
        body.transaction_account_total,
        body.transaction_amount,
        body.transaction_concept,
        body.transaction_date,
        body.transaction_create_date,
        body.fk_account_id,
        body.fk_category_id,
        id
      ],
      callback
    );
  },
  deleteTransaction: function(con, id, callback) {
    con.query("DELETE FROM TRANSACCION WHERE transaction_id = ?;", [id], callback);
  }
};

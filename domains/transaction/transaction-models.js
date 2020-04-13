module.exports = {
  getTransactions: function(con) {
    return con.query("SELECT * FROM TRANSACCION").catch(error => {
      return new Error(error);
    });
  },
  getTransaction: function(con, id) {
    return con
      .query("SELECT * FROM TRANSACCION WHERE transaction_id = $1 ", [id])
      .catch(error => {
        return new Error(error);
      });
  },
  createTransaction: function(con, body) {
    return con
      .query(
        "INSERT INTO TRANSACCION (transaction_account_total, transaction_amount, transaction_concept, transaction_date, transaction_create_date, fk_account_id, fk_category_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING transaction_id",
        [
          body.transaction_account_total,
          body.transaction_amount,
          body.transaction_concept,
          body.transaction_date,
          body.transaction_create_date,
          body.fk_account_id,
          body.fk_category_id
        ]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  updateTransaction: function(con, id, body) {
    return con
      .result(
        "UPDATE TRANSACCION SET transaction_account_total = $1, transaction_amount = $2, transaction_concept = $3, transaction_date = $4, fk_account_id = $5, fk_category_id = $6 WHERE transaction_id = $7;",
        [
          body.transaction_account_total,
          body.transaction_amount,
          body.transaction_concept,
          body.transaction_date,
          body.fk_account_id,
          body.fk_category_id,
          id
        ]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  deleteTransaction: function(con, id) {
    return con
      .result("DELETE FROM TRANSACCION WHERE transaction_id = $1;", [id])
      .catch(error => {
        return new Error(error);
      });
  }
};

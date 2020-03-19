module.exports = {
  getCurrenciesHistory: function(con, callback) {
    con.query("SELECT * FROM HISTORIAL_MONEDA", callback);
  },
  getCurrencyHistory: function(con, id, callback) {
    con.query("SELECT * FROM HISTORIAL_MONEDA WHERE currency_history_id = ? ", [id], callback);
  },
  createCurrencyHistory: function(con, body, callback) {
    con.query(
      "INSERT INTO HISTORIAL_MONEDA (currency_history_amount_one_dollar_equivalent, currency_history_date, fk_currency_id) VALUES (?, ?, ?);",
      [
        body.currency_history_amount_one_dollar_equivalent,
        body.currency_history_date,
        body.fk_currency_id
      ],
      callback
    );
  },
  updateCurrencyHistory: function(con, id, body, callback) {
    con.query(
      "UPDATE HISTORIAL_MONEDA SET currency_history_amount_one_dollar_equivalent = ?, currency_history_date = ?, fk_currency_id = ? WHERE currency_history_id = ?;",
      [body.currency_history_amount_one_dollar_equivalent, body.currency_history_date, body.fk_currency_id, id],
      callback
    );
  },
  deleteCurrencyHistory: function(con, id, callback) {
    con.query("DELETE FROM HISTORIAL_MONEDA WHERE currency_history_id = ?;", [id], callback);
  }
};

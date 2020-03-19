module.exports = {
  getCurrencies: function(con, callback) {
    con.query("SELECT * FROM MONEDA", callback);
  },
  getCurrency: function(con, id, callback) {
    con.query("SELECT * FROM MONEDA WHERE currency_id = ? ", [id], callback);
  },
  createCurrency: function(con, body, callback) {
    con.query(
      "INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code, currency_amount_one_dollar_equivalent) VALUES (?, ?, ?, ?);",
      [
        body.currency_name,
        body.currency_symbol,
        body.currency_iso_code,
        body.currency_amount_one_dollar_equivalent
      ],
      callback
    );
  },
  updateCurrency: function(con, id, body, callback) {
    con.query(
      "UPDATE MONEDA SET currency_name = ?, currency_symbol = ?, currency_iso_code = ?, currency_amount_one_dollar_equivalent = ? WHERE currency_id = ?;",
      [body.currency_name, body.currency_symbol, body.currency_iso_code, body.currency_amount_one_dollar_equivalent, id],
      callback
    );
  },
  deleteCurrency: function(con, id, callback) {
    con.query("DELETE FROM MONEDA WHERE currency_id = ?;", [id], callback);
  }
};

module.exports = {
  getCurrencies: function(con) {
    return con.query("SELECT * FROM MONEDA").catch(error => {
      return new Error(error);
    });
  },
  getCurrency: function(con, id) {
    return con
      .query("SELECT * FROM MONEDA WHERE currency_id = $1 ", [id])
      .catch(error => {
        return new Error(error);
      });
  },
  createCurrency: function(con, body) {
    return con
      .query(
        "INSERT INTO MONEDA (currency_name, currency_symbol, currency_iso_code, currency_amount_one_dollar_equivalent) VALUES ($1, $2, $3, $4) RETURNING currency_id;",
        [
          body.currency_name,
          body.currency_symbol,
          body.currency_iso_code,
          body.currency_amount_one_dollar_equivalent
        ]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  updateAODECurrency: function(con, body) {
    return con
      .result(
        "UPDATE MONEDA SET currency_amount_one_dollar_equivalent = $1 WHERE currency_iso_code = $2 RETURNING currency_id;",
        [body.currency_amount_one_dollar_equivalent, body.currency_iso_code]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  deleteCurrency: function(con, id) {
    return con
      .result(
        "DELETE FROM MONEDA WHERE currency_id = $1 RETURNING currency_id;",
        [id]
      )
      .catch(error => {
        return new Error(error);
      });
  }
};

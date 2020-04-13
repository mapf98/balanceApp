module.exports = {
  getCurrenciesHistory: function(con) {
    return con.query("SELECT * FROM HISTORIAL_MONEDA").catch(error => {
      return new Error(error);
    });
  },
  getCurrencyHistory: function(con, id) {
    return con
      .query("SELECT * FROM HISTORIAL_MONEDA WHERE currency_history_id = $1 ", [
        id
      ])
      .catch(error => {
        return new Error(error);
      });
  },
  createCurrencyHistory: function(con, body) {
    return con
      .query(
        "INSERT INTO HISTORIAL_MONEDA (currency_history_amount_one_dollar_equivalent, currency_history_date, fk_currency_id) VALUES ($1, $2, (SELECT currency_id FROM MONEDA WHERE currency_iso_code = $3)) RETURNING currency_history_id",
        [
          body.currency_history_amount_one_dollar_equivalent,
          body.currency_history_date,
          body.currency_iso_code
        ]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  updateCurrencyHistory: function(con, id, body) {
    return con
      .result(
        "UPDATE HISTORIAL_MONEDA SET currency_history_amount_one_dollar_equivalent = $1, currency_history_date = $2, fk_currency_id = (SELECT currency_id FROM MONEDA WHERE currency_iso_code = $3) WHERE currency_history_id = $4;",
        [
          body.currency_history_amount_one_dollar_equivalent,
          body.currency_history_date,
          body.currency_iso_code,
          id
        ]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  deleteCurrencyHistory: function(con, id) {
    return con
      .result("DELETE FROM HISTORIAL_MONEDA WHERE currency_history_id = $1;", [
        id
      ])
      .catch(error => {
        return new Error(error);
      });
  }
};

module.exports = {
  getAccounts: function(con) {
    return con.query("SELECT * FROM CUENTA").catch(error => {
      return new Error(error);
    });
  },
  getAccount: function(con, id) {
    return con
      .query("SELECT * FROM CUENTA WHERE account_id = $1 ", [id])
      .catch(error => {
        return new Error(error);
      });
  },
  createAccount: function(con, body) {
    return con
      .query(
        "INSERT INTO CUENTA (account_type, account_reference, account_create_date, fk_profile_id, fk_bank_id, fk_currency_id, fk_status_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING account_id",
        [
          body.account_type,
          body.account_reference,
          body.account_create_date,
          body.fk_profile_id,
          body.fk_bank_id,
          body.fk_currency_id,
          body.fk_status_id
        ]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  updateAccount: function(con, id, body) {
    return con
      .result(
        "UPDATE CUENTA SET account_type = $1, account_reference = $2, fk_profile_id = $3, fk_bank_id = $4, fk_currency_id = $5, fk_status_id = $6 WHERE account_id = $7;",
        [
          body.account_type,
          body.account_reference,
          body.fk_profile_id,
          body.fk_bank_id,
          body.fk_currency_id,
          body.fk_status_id,
          id
        ]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  changeStatusAccount: function(con, id, body) {
    return con
      .result(
        "UPDATE CUENTA SET fk_status_id = (SELECT status_id FROM ESTATUS WHERE status_name = $1) WHERE account_id = $2;",
        [body.status_name, id]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  deleteAccount: function(con, id) {
    return con
      .result("DELETE FROM CUENTA WHERE account_id = $1;", [id])
      .catch(error => {
        return new Error(error);
      });
  }
};

module.exports = {
  getAccounts: function(con, callback) {
    con.query("SELECT * FROM CUENTA", callback);
  },
  getAccount: function(con, id, callback) {
    con.query("SELECT * FROM CUENTA WHERE account_id = ? ", [id], callback);
  },
  createAccount: function(con, body, callback) {
    con.query(
      "INSERT INTO CUENTA (account_type, account_reference, account_create_date, fk_profile_id, fk_bank_id, fk_currency_id, fk_status_id) VALUES (?, ?, ?, ?, ?, ?, ?);",
      [
        body.account_type,
        body.account_reference,
        body.account_create_date,
        body.fk_profile_id,
        body.fk_bank_id,
        body.fk_currency_id,
        body.fk_status_id
      ],
      callback
    );
  },
  updateAccount: function(con, id, body, callback) {
    con.query(
      "UPDATE CUENTA SET account_type = ?, account_reference = ?, fk_profile_id = ?, fk_bank_id = ?, fk_currency_id = ?, fk_status_id = ? WHERE account_id = ?;",
      [
        body.account_type,
        body.account_reference,
        body.fk_profile_id,
        body.fk_bank_id,
        body.fk_currency_id,
        body.fk_status_id,
        id
      ],
      callback
    );
  },
  deleteAccount: function(con, id, callback) {
    con.query(
      "UPDATE CUENTA SET fk_status_id = (SELECT status_id FROM ESTATUS WHERE status_name = ?) WHERE account_id = ?;",
      ["REMOVE", id],
      callback
    );
  }
};

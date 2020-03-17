module.exports = {
  getAccounts: function(con, callback) {
    con.query("SELECT * FROM CUENTA", callback);
  },
  getAccount: function(con, id, callback) {
    con.query("SELECT * FROM CUENTA WHERE account_id = ? ", [id], callback);
  },
  createAccount: function(con, body, callback) {
    con.query(
      "INSERT INTO CUENTA (account_resume, account_reference, fk_user_id, fk_bank_id, fk_currency_id) VALUES (?, ?, ?, ?, ?);",
      [
        body.account_resume,
        body.account_reference,
        body.fk_user_id,
        body.fk_bank_id,
        body.fk_currency_id
      ],
      callback
    );
  },
  updateAccount: function(con, id, body, callback) {
    con.query(
      "UPDATE CUENTA SET account_resume = ?, account_reference = ?, fk_user_id = ?, fk_bank_id = ?, fk_currency_id = ? WHERE account_id = ?;",
      [
        body.account_resume,
        body.account_reference,
        body.fk_user_id,
        body.fk_bank_id,
        body.fk_currency_id,
        id
      ],
      callback
    );
  },
  deleteAccount: function(con, id, callback) {
    con.query("DELETE FROM CUENTA WHERE account_id = ?;", [id], callback);
  }
};

module.exports = {
  getFeedbacks: function(con, callback) {
    con.query("SELECT * FROM FEEDBACK", callback);
  },
  getFeedback: function(con, id, callback) {
    con.query("SELECT * FROM FEEDBACK WHERE feedback_id = ? ", [id], callback);
  },
  createFeedback: function(con, body, callback) {
    con.query(
      "INSERT INTO FEEDBACK (feedback_description, feedback_rate, feedback_date, fk_user_id) VALUES ( ?, ?, ?, ?);",
      [body.feedback_description, body.feedback_rate, body.feedback_date, body.fk_user_id],
      callback
    );
  },
  updateFeedback: function(con, id, body, callback) {
    con.query(
      "UPDATE FEEDBACK SET feedback_description = ?, feedback_rate = ?, feedback_date = ?, fk_user_id = ? WHERE feedback_id = ?;",
      [body.feedback_description, body.feedback_rate, body.feedback_date, body.fk_user_id, id],
      callback
    );
  },
  deleteFeedback: function(con, id, callback) {
    con.query("DELETE FROM FEEDBACK WHERE feedback_id = ?;", [id], callback);
  }
};

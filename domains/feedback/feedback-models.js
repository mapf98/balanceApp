module.exports = {
  getFeedbacks: function(con) {
    return con.query("SELECT * FROM FEEDBACK").catch(error => {
      return new Error(error);
    });
  },
  getFeedback: function(con, id) {
    return con
      .query("SELECT * FROM FEEDBACK WHERE feedback_id = $1 ", [id])
      .catch(error => {
        return new Error(error);
      });
  },
  createFeedback: function(con, body) {
    return con
      .query(
        "INSERT INTO FEEDBACK (feedback_description, feedback_rate, feedback_date, fk_user_id) VALUES ($1, $2, $3, $4) RETURNING feedback_id",
        [
          body.feedback_description,
          body.feedback_rate,
          body.feedback_date,
          body.fk_user_id
        ]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  updateFeedback: function(con, id, body) {
    return con
      .result(
        "UPDATE FEEDBACK SET feedback_description = $1, feedback_rate = $2, feedback_date = $3, fk_user_id = $4 WHERE feedback_id = $5;",
        [
          body.feedback_description,
          body.feedback_rate,
          body.feedback_date,
          body.fk_user_id,
          id
        ]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  deleteFeedback: function(con, id) {
    return con
      .result("DELETE FROM FEEDBACK WHERE feedback_id = $1;", [id])
      .catch(error => {
        return new Error(error);
      });
  }
};

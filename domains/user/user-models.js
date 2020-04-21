module.exports = {
  getUsers: function(con) {
    return con.query("SELECT * FROM USUARIO").catch(error => {
      return new Error(error);
    });
  },
  getUser: function(con, id) {
    return con
      .query("SELECT * FROM USUARIO WHERE user_id = $1", [id])
      .catch(error => {
        return new Error(error);
      });
  },
  createUser: function(con, body) {
    console.log(body);
    return con
      .query(
        "INSERT INTO USUARIO (user_first_name, user_last_name, user_email, user_alias, user_birthdate, user_password, user_create_date, fk_status_id) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8) RETURNING user_id",
        [
          body.user_first_name,
          body.user_last_name,
          body.user_email,
          body.user_alias,
          body.user_birthdate,
          body.user_password,
          body.user_create_date,
          body.fk_status_id
        ]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  updateUser: function(con, id, body) {
    return con
      .result(
        "UPDATE USUARIO SET user_first_name = $1, user_last_name = $2, user_email = $3, user_alias = $4, user_birthdate = $5, user_password = $6, fk_status_id = $7 WHERE user_id = $8;",
        [
          body.user_first_name,
          body.user_last_name,
          body.user_email,
          body.user_alias,
          body.user_birthdate,
          body.user_password,
          body.fk_status_id,
          id
        ]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  changeStatusUser: function(con, id, body) {
    return con
      .result(
        "UPDATE USUARIO SET fk_status_id = (SELECT status_id FROM ESTATUS WHERE status_name = $1) WHERE user_id = $2 ;",
        [body.status_name, id]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  deleteUser: function(con, id) {
    return con
      .result("DELETE FROM USUARIO WHERE user_id = $1;", [id])
      .catch(error => {
        return new Error(error);
      });
  }
};

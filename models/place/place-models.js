module.exports = {
  getPlaces: function(con) {
    return con.query("SELECT * FROM LUGAR").catch(error => {
      return new Error(error);
    });
  },
  getPlace: function(con, id) {
    return con
      .query("SELECT * FROM LUGAR WHERE place_id = $1 ", [id])
      .catch(error => {
        return new Error(error);
      });
  },
  createPlace: function(con, body) {
    return con
      .query(
        "INSERT INTO LUGAR (place_name, place_type, fk_place_id) VALUES ($1, $2, $3) RETURNING place_id",
        [body.place_name, body.place_type, body.fk_place_id]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  updatePlace: function(con, id, body) {
    return con
      .result(
        "UPDATE LUGAR SET place_name = $1, place_type = $2, fk_place_id = $3 WHERE place_id = $4;",
        [body.place_name, body.place_type, body.fk_place_id, id]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  deletePlace: function(con, id) {
    return con
      .result("DELETE FROM LUGAR WHERE place_id = $1;", [id])
      .catch(error => {
        return new Error(error);
      });
  }
};

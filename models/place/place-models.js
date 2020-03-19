module.exports = {
  getPlaces: function(con, callback) {
    con.query("SELECT * FROM LUGAR", callback);
  },
  getPlace: function(con, id, callback) {
    con.query("SELECT * FROM LUGAR WHERE place_id = ? ", [id], callback);
  },
  createPlace: function(con, body, callback) {
    con.query(
      "INSERT INTO LUGAR (place_name, place_type, fk_place_id) VALUES (?, ?, ?);",
      [body.place_name, body.place_type, body.fk_place_id],
      callback
    );
  },
  updatePlace: function(con, id, body, callback) {
    con.query(
      "UPDATE LUGAR SET place_name = ?, place_type = ?, fk_place_id = ? WHERE place_id = ?;",
      [body.place_name, body.place_type, body.fk_place_id, id],
      callback
    );
  },
  deletePlace: function(con, id, callback) {
    con.query("DELETE FROM LUGAR WHERE place_id = ?;", [id], callback);
  }
};

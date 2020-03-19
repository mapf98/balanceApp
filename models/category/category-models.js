module.exports = {
  getCategories: function(con, callback) {
    con.query("SELECT * FROM CATEGORIA", callback);
  },
  getCategory: function(con, id, callback) {
    con.query("SELECT * FROM CATEGORIA WHERE category_id = ? ", [id], callback);
  },
  createCategory: function(con, body, callback) {
    con.query(
      "INSERT INTO CATEGORIA (category_name) VALUES (?);",
      [
        body.category_name
      ],
      callback
    );
  },
  updateCategory: function(con, id, body, callback) {
    con.query(
      "UPDATE CATEGORIA SET category_name = ? WHERE category_id = ?;",
      [
        body.category_name,
        id
      ],
      callback
    );
  },
  deleteCategory: function(con, id, callback) {
    con.query("DELETE FROM CATEGORIA WHERE category_id = ?;", [id], callback);
  }
};

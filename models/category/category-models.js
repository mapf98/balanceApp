module.exports = {
  getCategories: function(con) {
    return con.query("SELECT * FROM CATEGORIA").catch(error => {
      return new Error(error);
    });
  },
  getCategory: function(con, id) {
    return con
      .query("SELECT * FROM CATEGORIA WHERE category_id = $1", [id])
      .catch(error => {
        return new Error(error);
      });
  },
  createCategory: function(con, body) {
    return con
      .query(
        "INSERT INTO CATEGORIA (category_name) VALUES ($1) RETURNING category_id",
        [body.category_name]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  updateCategory: function(con, id, body) {
    return con
      .result(
        "UPDATE CATEGORIA SET category_name = $1 WHERE category_id = $2;",
        [body.category_name, id]
      )
      .catch(error => {
        return new Error(error);
      });
  },
  deleteCategory: function(con, id) {
    return con
      .result("DELETE FROM CATEGORIA WHERE category_id = $1;", [id])
      .catch(error => {
        return new Error(error);
      });
  }
};

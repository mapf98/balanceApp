const request = require("supertest");
const app = require("../../app.js");

describe("Categories Test", () => {
  let insert_id = 0;

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/categories")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method GET", done => {
    request(app)
      .get("/balance/api/categories/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method GET", done => {
    request(app)
      .get("/balance/api/categories/-1")
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Methoh POST", done => {
    const category = {
      category_name: "Categoria de prueba"
    };
    request(app)
      .post("/balance/api/categories/create")
      .send(category)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Methoh POST", done => {
    const category = {
      category_name: null
    };
    request(app)
      .post("/balance/api/categories/create")
      .send(category)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT", done => {
    const category = {
      category_name: "Categoria de prueba"
    };
    request(app)
      .put(`/balance/api/categories/update/${insert_id}`)
      .send(category)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT", done => {
    const category = {
      category_name: null
    };
    request(app)
      .put(`/balance/api/categories/update/${insert_id}`)
      .send(category)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/categories/delete/${insert_id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/categories/delete/-1`)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });
});

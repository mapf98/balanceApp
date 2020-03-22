const request = require("supertest");
const app = require("../../app.js");

describe("Places Test", () => {
  let insert_id = 0;

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/places")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/places/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Methoh POST", done => {
    const places = {
      place_name: "Test",
      place_type: "PAI",
      fk_place_id: null
    };
    request(app)
      .post("/balance/api/places/create")
      .send(places)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Method PUT", done => {
    const places = {
      place_name: "Test",
      place_type: "PAI",
      fk_place_id: null
    };
    request(app)
      .put(`/balance/api/places/update/${insert_id}`)
      .send(places)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/places/delete/${insert_id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

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

  test("Failure Check Method GET (1)", done => {
    request(app)
      .get("/balance/api/places/test")
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (2)", done => {
    request(app)
      .get("/balance/api/places/-1")
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Methoh POST", done => {
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

  test("Success Check Method GET", done => {
    request(app)
      .get(`/balance/api/places/${insert_id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Methoh POST", done => {
    const places = {
      place_name: 111,
      place_type: 111,
      fk_place_id: null
    };
    request(app)
      .post("/balance/api/places/create")
      .send(places)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT", done => {
    const places = {
      place_name: "Test",
      place_type: "EST",
      fk_place_id: 1
    };
    request(app)
      .put(`/balance/api/places/update/${insert_id}`)
      .send(places)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT", done => {
    const places = {
      place_name: 111,
      place_type: 111,
      fk_place_id: null
    };
    request(app)
      .put(`/balance/api/places/update/${insert_id}`)
      .send(places)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/places/delete/${insert_id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/places/delete/test`)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });
});

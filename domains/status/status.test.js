const request = require("supertest");
const app = require("../../app.js");
const auth = require("../../services/auth.js");

describe("Statuses Test", () => {
  let insert_id = 0;
  const user_id = 1;
  const token = auth.createToken(user_id);

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/statuses")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (1)", done => {
    request(app)
      .get("/balance/api/statuses/test")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (2)", done => {
    request(app)
      .get("/balance/api/statuses/-1")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Methoh POST", done => {
    const status = {
      status_name: "TEST"
    };
    request(app)
      .post("/balance/api/statuses/create")
      .send(status)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method GET", done => {
    request(app)
      .get(`/balance/api/statuses/${insert_id}`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Methoh POST", done => {
    const status = {
      status_name: null
    };
    request(app)
      .post("/balance/api/statuses/create")
      .send(status)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT", done => {
    const status = {
      status_name: "TEST"
    };
    request(app)
      .put(`/balance/api/statuses/update/${insert_id}`)
      .send(status)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT", done => {
    const status = {
      status_name: null
    };
    request(app)
      .put(`/balance/api/statuses/update/${insert_id}`)
      .send(status)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/statuses/delete/${insert_id}`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/statuses/delete/test`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });
});

const request = require("supertest");
const app = require("../../app.js");

describe("Banks Test", () => {
  let insert_id = 0;

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/banks")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method GET", done => {
    request(app)
      .get("/balance/api/banks/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (1)", done => {
    request(app)
      .get("/balance/api/banks/test")
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (2)", done => {
    request(app)
      .get("/balance/api/banks/-1")
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Methoh POST", done => {
    const bank = {
      bank_name: "Banco de prueba",
      fk_place_id: 1
    };
    request(app)
      .post("/balance/api/banks/create")
      .send(bank)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Methoh POST", done => {
    const bank = {
      bank_name: null,
      fk_place_id: null
    };
    request(app)
      .post("/balance/api/banks/create")
      .send(bank)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT", done => {
    const bank = {
      bank_name: "Banco de prueba",
      fk_place_id: 1
    };
    request(app)
      .put(`/balance/api/banks/update/${insert_id}`)
      .send(bank)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT", done => {
    const bank = {
      bank_name: null,
      fk_place_id: null
    };
    request(app)
      .put(`/balance/api/banks/update/${insert_id}`)
      .send(bank)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/banks/delete/${insert_id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Fail Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/banks/delete/test`)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });
});

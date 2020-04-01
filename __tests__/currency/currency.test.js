const request = require("supertest");
const app = require("../../app.js");

describe("Currencies Test", () => {
  let insert_id = 0;

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/currencies")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method GET", done => {
    request(app)
      .get("/balance/api/currencies/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (1)", done => {
    request(app)
      .get("/balance/api/currencies/test")
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (2)", done => {
    request(app)
      .get("/balance/api/currencies/-1")
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Methoh POST", done => {
    const currency = {
      currency_name: "Prueba",
      currency_symbol: "PRB",
      currency_iso_code: "PRU",
      currency_amount_one_dollar_equivalent: 100
    };
    request(app)
      .post("/balance/api/currencies/create")
      .send(currency)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Methoh POST", done => {
    const currency = {
      currency_name: null,
      currency_symbol: null,
      currency_iso_code: null,
      currency_amount_one_dollar_equivalent: null
    };
    request(app)
      .post("/balance/api/currencies/create")
      .send(currency)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT", done => {
    const currency = {
      currency_iso_code: "USD",
      currency_amount_one_dollar_equivalent: 100
    };
    request(app)
      .put(`/balance/api/currencies/update/aode`)
      .send(currency)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT", done => {
    const currency = {
      currency_iso_code: 111,
      currency_amount_one_dollar_equivalent: null
    };
    request(app)
      .put(`/balance/api/currencies/update/aode`)
      .send(currency)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/currencies/delete/${insert_id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/currencies/delete/test`)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });
});

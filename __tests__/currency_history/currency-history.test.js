const request = require("supertest");
const app = require("../../app.js");
const auth = require("../../services/auth.js");

describe("/balance/api/currencies-history", () => {
  let insert_id = 0;
  const user_id = 1;
  const token = auth.createToken(user_id);

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/currencies-history")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method GET", done => {
    request(app)
      .get("/balance/api/currencies-history/1")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method GET", done => {
    request(app)
      .get("/balance/api/currencies-history/-1")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Methoh POST", done => {
    const currency_history = {
      currency_history_id: 1,
      currency_history_amount_one_dollar_equivalent: 100,
      currency_history_date: "2020-03-18",
      fk_currency_id: 1
    };
    request(app)
      .post("/balance/api/currencies-history/create")
      .send(currency_history)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Methoh POST", done => {
    const currency_history = {
      currency_history_id: null,
      currency_history_amount_one_dollar_equivalent: null,
      currency_history_date: null,
      fk_currency_id: null
    };
    request(app)
      .post("/balance/api/currencies-history/create")
      .send(currency_history)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT", done => {
    const currency_history = {
      currency_history_id: 1,
      currency_history_amount_one_dollar_equivalent: 100,
      currency_history_date: "2020-03-18",
      fk_currency_id: 1
    };
    request(app)
      .put(`/balance/api/currencies-history/update/${insert_id}`)
      .send(currency_history)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT", done => {
    const currency_history = {
      currency_history_id: null,
      currency_history_amount_one_dollar_equivalent: null,
      currency_history_date: null,
      fk_currency_id: null
    };
    request(app)
      .put(`/balance/api/currencies-history/update/${insert_id}`)
      .send(currency_history)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/currencies-history/delete/${insert_id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/currencies-history/delete/-1`)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });
});

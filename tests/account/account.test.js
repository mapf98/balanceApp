const request = require("supertest");
const app = require("../../app.js");

describe("Accounts Test", () => {
  let insert_id = 0;

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/accounts")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/accounts/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Methoh POST", done => {
    const account = {
      account_type: "DIG",
      account_reference: "Referencia de prueba",
      account_create_date: "2020-04-11",
      fk_profile_id: 1,
      fk_bank_id: 1,
      fk_status_id: 1,
      fk_currency_id: 1
    };
    request(app)
      .post("/balance/api/accounts/create")
      .send(account)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Method PUT", done => {
    const account = {
      account_type: "DIG",
      account_reference: "Referencia de prueba",
      account_create_date: "2020-04-11",
      fk_profile_id: 1,
      fk_bank_id: 1,
      fk_status_id: 1,
      fk_currency_id: 1
    };
    request(app)
      .put(`/balance/api/accounts/update/${insert_id}`)
      .send(account)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/accounts/delete/${insert_id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

const request = require("supertest");
const app = require("../../app.js");
const auth = require("../../services/auth.js");

describe("Accounts Test", () => {
  let insert_id = 0;
  const user_id = 1;
  const token = auth.createToken(user_id);

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/accounts")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (1)", done => {
    request(app)
      .get("/balance/api/accounts/test")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (2)", done => {
    request(app)
      .get("/balance/api/accounts/-1")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Methoh POST", done => {
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
      .set("Authorization", "Bearer " + token)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method GET", done => {
    request(app)
      .get(`/balance/api/accounts/${insert_id}`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Methoh POST", done => {
    const account = {
      account_type: null,
      account_reference: null,
      account_create_date: null,
      fk_profile_id: null,
      fk_bank_id: null,
      fk_status_id: null,
      fk_currency_id: null
    };
    request(app)
      .post("/balance/api/accounts/create")
      .send(account)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT General", done => {
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
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT General", done => {
    const account = {
      account_type: null,
      account_reference: null,
      account_create_date: null,
      fk_profile_id: null,
      fk_bank_id: null,
      fk_status_id: null,
      fk_currency_id: null
    };
    request(app)
      .put(`/balance/api/accounts/update/${insert_id}`)
      .send(account)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT Status", done => {
    const status = {
      status_name: "REMOVE"
    };
    request(app)
      .put(`/balance/api/accounts/change-status/${insert_id}`)
      .send(status)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT Status", done => {
    const status = {
      status_name: -1
    };
    request(app)
      .put(`/balance/api/accounts/change-status/${insert_id}`)
      .send(status)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/accounts/delete/${insert_id}`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/accounts/delete/test`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });
});

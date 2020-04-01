const request = require("supertest");
const app = require("../../app.js");
const auth = require("../../services/auth.js");

describe("Transactions Test", () => {
  let insert_id = 0;
  const user_id = 1;
  const token = auth.createToken(user_id);

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/transactions")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method GET", done => {
    request(app)
      .get("/balance/api/transactions/1")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (1)", done => {
    request(app)
      .get("/balance/api/transactions/test")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (2)", done => {
    request(app)
      .get("/balance/api/transactions/-1")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Methoh POST", done => {
    const transaction = {
      transaction_account_total: 100,
      transaction_amount: 100,
      transaction_concept: "Test",
      transaction_date: "2020-01-02",
      transaction_create_date: "2020-04-03",
      fk_account_id: 1,
      fk_category_id: 1
    };
    request(app)
      .post("/balance/api/transactions/create")
      .send(transaction)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Methoh POST", done => {
    const transaction = {
      transaction_account_total: 1,
      transaction_amount: 10,
      transaction_concept: null,
      transaction_date: 111,
      transaction_create_date: 111,
      fk_account_id: null,
      fk_category_id: 1
    };
    request(app)
      .post("/balance/api/transactions/create")
      .send(transaction)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT", done => {
    const transaction = {
      transaction_account_total: 100,
      transaction_amount: 10,
      transaction_concept: "Test update",
      transaction_date: "2020-01-02",
      transaction_create_date: "2020-04-03",
      fk_account_id: 1,
      fk_category_id: 1
    };
    request(app)
      .put(`/balance/api/transactions/update/${insert_id}`)
      .send(transaction)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT", done => {
    const transaction = {
      transaction_account_total: 20.32,
      transaction_amount: 10,
      transaction_concept: 111,
      transaction_date: null,
      transaction_create_date: "2020-04-03",
      fk_account_id: 1,
      fk_category_id: 1
    };
    request(app)
      .put(`/balance/api/transactions/update/${insert_id}`)
      .send(transaction)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/transactions/delete/${insert_id}`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/transactions/delete/test`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });
});

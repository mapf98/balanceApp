const request = require("supertest");
const app = require("../../app.js");

describe("Transactions Test", () => {
  let insert_id = 0;

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/transactions")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/transactions/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Methoh POST", done => {
    const transaction = {
      transaction_account_total: 20.32,
      transaction_amount: 10,
      transaction_concept: "Test",
      transaction_date: "2020-01-02",
      transaction_create_date: "2020-04-03",
      fk_account_id: 1,
      fk_category_id: 1
    };
    request(app)
      .post("/balance/api/transactions/create")
      .send(transaction)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Method PUT", done => {
    const transaction = {
      transaction_account_total: 20.32,
      transaction_amount: 10,
      transaction_concept: "Test",
      transaction_date: "2020-01-02",
      transaction_create_date: "2020-04-03",
      fk_account_id: 1,
      fk_category_id: 1
    };
    request(app)
      .put(`/balance/api/transactions/update/${insert_id}`)
      .send(transaction)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/transactions/delete/${insert_id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

const request = require("supertest");
const app = require("../../app.js");

describe("/balance/api/transactions", () => {
  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/transactions")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

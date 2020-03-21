const request = require("supertest");
const app = require("../../app.js");

describe("/balance/api/accounts", () => {
  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/accounts")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

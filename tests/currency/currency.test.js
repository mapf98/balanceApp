const request = require("supertest");
const app = require("../../app.js");

describe("/balance/api/currencies", () => {
  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/currencies")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

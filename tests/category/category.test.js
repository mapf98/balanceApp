const request = require("supertest");
const app = require("../../app.js");

describe("/balance/api/categories", () => {
  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/categories")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

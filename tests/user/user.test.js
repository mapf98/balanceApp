const request = require("supertest");
const app = require("../../app.js");

describe("/balance/api/users", () => {
  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/users")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

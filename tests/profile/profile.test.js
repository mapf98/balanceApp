const request = require("supertest");
const app = require("../../app.js");

describe("/balance/api/profiles", () => {
  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/profiles")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

const request = require("supertest");
const app = require("../../app.js");

describe("/balance/api/statuses", () => {
  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/statuses")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

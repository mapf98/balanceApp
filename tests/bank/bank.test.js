const request = require("supertest");
const app = require("../../app.js");

describe("/balance/api/banks", () => {
  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/banks")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

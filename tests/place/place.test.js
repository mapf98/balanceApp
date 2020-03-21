const request = require("supertest");
const app = require("../../app.js");

describe("/balance/api/places", () => {
  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/places")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

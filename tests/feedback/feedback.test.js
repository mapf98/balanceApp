const request = require("supertest");
const app = require("../../app.js");

describe("/balance/api/feedbacks", () => {
  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/feedbacks")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

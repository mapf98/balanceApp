const request = require("supertest");
const app = require("../../app.js");

describe("Profiles Test", () => {
  let insert_id = 0;

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/profiles")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/profiles/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Methoh POST", done => {
    const profile = {
      profile_id: 1,
      profile_name: "Test",
      profile_type: "PER",
      profile_create_date: "2020-03-10",
      fk_user_id: 1
    };
    request(app)
      .post("/balance/api/profiles/create")
      .send(profile)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Method PUT", done => {
    const profile = {
      profile_id: 1,
      profile_name: "Test",
      profile_type: "PER",
      profile_create_date: "2020-03-10",
      fk_user_id: 1
    };
    request(app)
      .put(`/balance/api/profiles/update/${insert_id}`)
      .send(profile)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/profiles/delete/${insert_id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

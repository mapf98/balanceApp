const request = require("supertest");
const app = require("../../app.js");
const auth = require("../../services/auth.js");

describe("Profiles Test", () => {
  let insert_id = 0;
  const user_id = 1;
  const token = auth.createToken(user_id);

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/profiles")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (1)", done => {
    request(app)
      .get("/balance/api/profiles/test")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (2)", done => {
    request(app)
      .get("/balance/api/profiles/-1")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Methoh POST", done => {
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
      .set("Authorization", "Bearer " + token)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method GET", done => {
    request(app)
      .get(`/balance/api/profiles/${insert_id}`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Methoh POST", done => {
    const profile = {
      profile_id: 1,
      profile_name: 111,
      profile_type: 111,
      profile_create_date: "2020-03-10",
      fk_user_id: null
    };
    request(app)
      .post("/balance/api/profiles/create")
      .send(profile)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT", done => {
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
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT", done => {
    const profile = {
      profile_id: 1,
      profile_name: null,
      profile_type: null,
      profile_create_date: 111,
      fk_user_id: 1
    };
    request(app)
      .put(`/balance/api/profiles/update/${insert_id}`)
      .send(profile)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/profiles/delete/${insert_id}`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/profiles/delete/test`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });
});

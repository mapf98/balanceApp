const request = require("supertest");
const app = require("../../app.js");
const jwt = require("jwt-simple");

describe("Users Test", () => {
  let token = null;
  let insert_id = 0;

  test("Success Check Methoh POST", done => {
    const user = {
      user_first_name: "Test",
      user_last_name: "Apellido Test",
      user_email: "test@gmail.com",
      user_alias: "t98",
      user_birthdate: "1998-04-03",
      user_password: "admin1",
      user_create_date: "2020-03-08",
      fk_status_id: 1
    };
    request(app)
      .post("/balance/api/users/create")
      .send(user)
      .then(response => {
        token = response.body.token;
        insert_id = response.body.returning_id;
        expect(parseInt(response.body.status)).toBe(200);
        done();
      });
  });

  test("Failure Check Methoh POST", done => {
    const user = {
      user_first_name: null,
      user_last_name: null,
      user_email: null,
      user_alias: null,
      user_birthdate: null,
      user_password: null,
      fk_status_id: null
    };
    request(app)
      .post("/balance/api/users/create")
      .send(user)
      .then(response => {
        expect(response.body.status).not.toBe(200);
        done();
      });
  });

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/users")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method GET", done => {
    request(app)
      .get(`/balance/api/users/${insert_id}`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (1)", done => {
    request(app)
      .get("/balance/api/users/test")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Failure Check Method GET (2)", done => {
    request(app)
      .get("/balance/api/users/-1")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT General", done => {
    const user = {
      user_first_name: "Test",
      user_last_name: "Apellido Test",
      user_email: "test@gmail.com",
      user_alias: "t98",
      user_birthdate: "1998-04-03",
      user_password: "admin1",
      fk_status_id: 1
    };
    request(app)
      .put(`/balance/api/users/update/${insert_id}`)
      .send(user)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT General", done => {
    const user = {
      user_first_name: 11221,
      user_last_name: "Apellido Test",
      user_email: "test@gmail.com",
      user_alias: 1212,
      user_birthdate: "1998-04-43",
      user_password: "admin1",
      fk_status_id: 1
    };
    request(app)
      .put(`/balance/api/users/update/${insert_id}`)
      .send(user)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT Status", done => {
    const status = {
      status_name: "REMOVE"
    };
    request(app)
      .put(`/balance/api/users/change-status/${insert_id}`)
      .send(status)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT Status", done => {
    const status = {
      status_name: -1
    };
    request(app)
      .put(`/balance/api/users/change-status/${insert_id}`)
      .send(status)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/users/delete/${insert_id}`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method DELETE", done => {
    request(app)
      .delete("/balance/api/users/delete/test")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });
});

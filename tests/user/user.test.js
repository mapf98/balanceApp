const request = require("supertest");
const app = require("../../app.js");

describe("Users Test", () => {
  let insert_id = 0;

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/users")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method GET", done => {
    request(app)
      .get("/balance/api/users/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method GET", done => {
    request(app)
      .get("/balance/api/users/-1")
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Failure Check Methoh POST", done => {
    const user = {
      user_first_name: 1111,
      user_last_name: "Apellido Test",
      user_email: "test@gmail.com",
      user_alias: 333,
      user_birthdate: "1998-04-100",
      user_password: 2222,
      fk_status_id: 1
    };
    request(app)
      .post("/balance/api/users/create")
      .send(user)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Methoh POST", done => {
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
      .post("/balance/api/users/create")
      .send(user)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method PUT", done => {
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
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT", done => {
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
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/users/delete/${insert_id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

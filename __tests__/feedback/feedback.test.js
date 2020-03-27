const request = require("supertest");
const app = require("../../app.js");
const auth = require("../../services/auth.js");

describe("Feedbacks Test", () => {
  let insert_id = 0;
  const user_id = 1;
  const token = auth.createToken(user_id);

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/feedbacks")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method GET", done => {
    request(app)
      .get("/balance/api/feedbacks/1")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method GET", done => {
    request(app)
      .get("/balance/api/feedbacks/-1")
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Methoh POST", done => {
    const feedback = {
      feedback_description: "Prueba",
      feedback_rate: 5,
      feedback_date: "2020-10-20",
      fk_user_id: 1
    };
    request(app)
      .post("/balance/api/feedbacks/create")
      .send(feedback)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        insert_id = response.body.returning_id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Methoh POST", done => {
    const feedback = {
      feedback_description: null,
      feedback_rate: null,
      feedback_date: null,
      fk_user_id: 1
    };
    request(app)
      .post("/balance/api/feedbacks/create")
      .send(feedback)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method PUT", done => {
    const feedback = {
      feedback_description: "Prueba",
      feedback_rate: 5,
      feedback_date: "2020-10-20",
      fk_user_id: 1
    };
    request(app)
      .put(`/balance/api/feedbacks/update/${insert_id}`)
      .send(feedback)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method PUT", done => {
    const feedback = {
      feedback_description: null,
      feedback_rate: null,
      feedback_date: null,
      fk_user_id: 1
    };
    request(app)
      .put(`/balance/api/feedbacks/update/${insert_id}`)
      .send(feedback)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/feedbacks/delete/${insert_id}`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/feedbacks/delete/-1`)
      .set("Authorization", "Bearer " + token)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });
});

const request = require("supertest");
const app = require("../../app.js");

describe("Feedbacks Test", () => {
  let insert_id = 0;

  test("Check Method GET", done => {
    request(app)
      .get("/balance/api/feedbacks")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Success Check Method GET", done => {
    request(app)
      .get("/balance/api/feedbacks/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method GET", done => {
    request(app)
      .get("/balance/api/feedbacks/-1")
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
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });

  test("Success Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/feedbacks/delete/${insert_id}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Failure Check Method DELETE", done => {
    request(app)
      .delete(`/balance/api/feedbacks/delete/-1`)
      .then(response => {
        expect(response.statusCode).not.toBe(200);
        done();
      });
  });
});

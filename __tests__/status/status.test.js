// const request = require("supertest");
// const app = require("../../app.js");

// describe("Statuses Test", () => {
//   let insert_id = 0;

//   test("Check Method GET", done => {
//     request(app)
//       .get("/balance/api/statuses")
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });

//   test("Check Method GET", done => {
//     request(app)
//       .get("/balance/api/statuses/1")
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });

//   test("Check Methoh POST", done => {
//     const status = {
//       status_name: "TEST"
//     };
//     request(app)
//       .post("/balance/api/statuses/create")
//       .send(status)
//       .then(response => {
//         insert_id = response.body.returning_id;
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });

//   test("Check Method PUT", done => {
//     const status = {
//       status_name: "TEST"
//     };
//     request(app)
//       .put(`/balance/api/statuses/update/${insert_id}`)
//       .send(status)
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });

//   test("Check Method DELETE", done => {
//     request(app)
//       .delete(`/balance/api/statuses/delete/${insert_id}`)
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });
// });

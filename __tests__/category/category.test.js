// const request = require("supertest");
// const app = require("../../app.js");

// describe("Categories Test", () => {
//   let insert_id = 0;

//   test("Check Method GET", done => {
//     request(app)
//       .get("/balance/api/categories")
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });

//   test("Check Method GET", done => {
//     request(app)
//       .get("/balance/api/categories/1")
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });

//   test("Check Methoh POST", done => {
//     const category = {
//       category_name: "Categoria de prueba"
//     };
//     request(app)
//       .post("/balance/api/categories/create")
//       .send(category)
//       .then(response => {
//         insert_id = response.body.returning_id;
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });

//   test("Check Method PUT", done => {
//     const category = {
//       category_name: "Categoria de prueba"
//     };
//     request(app)
//       .put(`/balance/api/categories/update/${insert_id}`)
//       .send(category)
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });

//   test("Check Method DELETE", done => {
//     request(app)
//       .delete(`/balance/api/categories/delete/${insert_id}`)
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });
// });

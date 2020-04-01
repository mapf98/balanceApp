require("dotenv").config();

//CONEXION CON PG
const pgp = require("pg-promise")();
module.exports = pgp(
  `postgres://${process.env.DB_USER_PG}:${process.env.DB_PASSWORD}@localhost:5432/balanceapp`
);

//CONEXION CON MYSQL
//const mysql = require("mysql");
// module.exports = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   insecureAuth: true
// });

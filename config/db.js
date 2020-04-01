require("dotenv").config();
const pgp = require("pg-promise")();

module.exports = pgp(
  `postgres://${process.env.DB_USER_PG}:${process.env.DB_PASSWORD}@localhost:5432/balanceapp`
);

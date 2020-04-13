require("dotenv").config();
const pgp = require("pg-promise")();

//Development
module.exports = pgp({
  connectionString: `postgres://${process.env.DB_USER_PG}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
});

//Production
// module.exports = pgp({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//     mode: require
//   }
// });

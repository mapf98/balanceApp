require("dotenv").config();
const pgp = require("pg-promise")();

module.exports = pgp({
  connectionString:
    process.env.NODE_ENV == "development"
      ? `postgres://${process.env.DB_USER_PG}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
      : process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV == "development"
      ? false
      : {
          rejectUnauthorized: false,
          mode: require
        }
});

// module.exports = pgp({
//   connectionString: `postgres://${process.env.DB_USER_HK}:${process.env.DB_USER_HKPW}@${process.env.DB_HOST_HK}:${process.env.DB_PORT}/${process.env.DB_HKNAME}`,
//   ssl: {
//     rejectUnauthorized: false,
//     mode: require
//   }
// });

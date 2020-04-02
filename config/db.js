require("dotenv").config();
const fs = require("fs");
const pgp = require("pg-promise")();

module.exports = pgp({
  connectionString:
    "postgres://vhndxbrzealghr:0a4d1b0e814a0aebc5dec914ddeaf1f6d22ffe2ddbb1fa39d56bb3f51bf43aec@ec2-54-147-209-121.compute-1.amazonaws.com:5432/dckk0n1b8bv118",
  ssl: {
    rejectUnauthorized: false,
    mode: require
  }
});

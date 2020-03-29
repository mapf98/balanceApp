require("dotenv").config();
const express = require("express");
const app = express();
const compression = require("compression");
const morgan = require("morgan");
const fs = require("fs");
const helmet = require("helmet");
const chalk = require("chalk");
const path = require("path");
const bodyParser = require("body-parser");
const errorhandler = require("errorhandler");
const connectionBD = require("./config/dbmysql.js");
const cron = require("node-cron");
const axios = require("axios");
const moment = require("moment");

app.use(compression());
app.use(helmet());
app.use(
  morgan(
    chalk.cyan("[:date[web]] --> ") +
      chalk.blue("HTTP (v:http-version)") +
      " | " +
      chalk.yellow(":method -> :url") +
      " | " +
      chalk.green(":status") +
      " | " +
      chalk.blue("Time: :response-time[digits] ms")
  )
);
app.use(
  morgan(
    "[:date[web]] --> HTTP (v:http-version) | :method -> :url | :status | Time: :response-time[digits] ms",
    {
      stream: fs.createWriteStream(path.join("./logs", "access.log"), {
        flags: "a"
      })
    }
  )
);
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  req.con = connectionBD;
  next();
});

// include router
const router = require("./routes/router.js");

// routing
app.use("/balance/api/", router);

// only use on development
if (process.env.NODE_ENV === "development") {
  app.use(errorhandler({ log: errorLogger }));
}

function errorLogger(err, str, req) {
  const error = `[${req._startTime}] Error in ${req.method} ${req.url} | Error code: ${err.code} | SQL Mesg: ${err.sqlMessage} | Query: ${err.sql} \n`;

  //console.log(error);
  fs.writeFile(
    "./logs/errors.log",
    error,
    {
      encoding: "utf8",
      flag: "a"
    },
    function(err) {}
  );
}

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

cron.schedule(
  "0 9,13,17,23 * * *",
  () => {
    axios
      .get(
        `https://openexchangerates.org/api/latest.json?app_id=${process.env.SECRET_API_CURRENCY_ID}&base=USD&show_alternative=1&symbols=EUR,VEF_BLKMKT`
      )
      .then(function(response) {
        for (const key in response.data.rates) {
          axios.post(
            "http://localhost:3000/balance/api/currencies-history/create",
            {
              currency_history_amount_one_dollar_equivalent:
                response.data.rates[key],
              currency_history_date: moment().format("YYYY-MM-DD"),
              currency_iso_code: key
            }
          );
        }
      })
      .catch(error => {
        console.log("Error: ", error.message);
      });
  },
  {
    scheduled: true,
    timezone: "America/Caracas"
  }
);

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res) {
//   res.status(err.status || 500);
//   res.json({
//     errors: {
//       message: err.message,
//       error: {}
//     }
//   });
// });

module.exports = app;

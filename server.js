require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const compression = require("compression");
const morgan = require('morgan');
var fs = require("fs");
const chalk = require("chalk");
const path = require("path");
const bodyParser = require("body-parser");
const errorhandler = require("errorhandler");
const isProduction = process.env.NODE_ENV === "production";
const connectionBD = require("./config/dbmysql.js");

app.use(compression());
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

if (!isProduction) {
  app.use(errorhandler());
}

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function (err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err
      }
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {}
    }
  });
});

app.listen(port, () =>
  console.log(`Servicio activo - (Puerto para peticiones: ${port})`)
);

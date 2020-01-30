require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
var compression = require('compression');
var path = require("path");
var bodyParser = require('body-parser');
var errorhandler = require("errorhandler");
var isProduction = process.env.NODE_ENV === "production";

app.use(compression());
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Conexion BD
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MIGuel33&&",
  database: "dbexpress",
  insecureAuth: true
});

connection.connect();
//

app.get("/api/prueba", function (req, res) {
  let personas = [];
  connection.query("SELECT * FROM PERSONA AS personas", function(
    error,
    results,
    fields
  ) {
    if (error) {
      res.send(error);
    } else {
      personas = results;
      res.json({ data: personas });
    }
  });
});


app.post("/api/createuser", function(req, res) {
  let nombre = req.body.nombre;
  let edad = req.body.edad;
  connection.query(
    "INSERT INTO PERSONA (NOMBRE, EDAD) VALUES (?, ?);", [nombre, edad],
    function(error, results, fields) {
      if (error) {
        res.send(error);
      } else {
        res.sendStatus('200');
      }
    }
  );
});

app.get("/api/prueba/:id", function(req, res) {
  let personas = [];
  let test = req.params.id;
  connection.query("SELECT * FROM PERSONA AS personas WHERE ID = ? ",[test], function(
    error,
    results,
    fields
  ) {
    if (error) {
      res.send(error);
    } else {
      personas = results;
      res.json({ data: personas });
    }
  });
});

if (!isProduction) {
  app.use(errorhandler());
}

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
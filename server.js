require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
var compression = require('compression');
var path = require("path");
var bodyParser = require('body-parser');

app.use(compression());
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
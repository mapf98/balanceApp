const app = require("./app.js");
const port = process.env.PORT;

app.listen(port, () =>
  console.log(`Servicio activo - (Puerto para peticiones: ${port})`)
);

// const app = require("./app.js");
// const https = require("https");
// const port = process.env.PORT;
// const fs = require("fs");

// https
//   .createServer(
//     {
//       key: fs.readFileSync("server.key"),
//       cert: fs.readFileSync("server.cert")
//     },
//     app
//   )
//   .listen(port, function() {
//     console.log(`Listening on port ${port}! Go to https://localhost:${port}/`);
//   });

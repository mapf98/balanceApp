//server.js
const app = require("./app");
const port = process.env.PORT;

app.listen(port, () =>
  console.log(`Servicio activo - (Puerto para peticiones: ${port})`)
);

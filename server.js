const app = require("./app.js");
const port = process.env.DB_PORT;

app.listen(port, () =>
  console.log(`Servicio activo - (Puerto para peticiones: ${port})`)
);

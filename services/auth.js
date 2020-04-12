const jwt = require("jwt-simple");
const moment = require("moment");

function createToken(user) {
  const payload = {
    user_id: user,
    iat: moment(),
    exp: moment().add(1, "day")
  };

  return jwt.encode(payload, process.env.SECRET_TOKEN);
}

function validateToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: "Acceso denegado" });
  }

  const token = req.headers.authorization.split(" ")[1];
  const payload = jwt.decode(token, process.env.SECRET_TOKEN);
  const tokenExp = new Date(payload.exp);
  const actualDate = new Date(moment());

  if (tokenExp <= actualDate) {
    return res.status(401).send({ message: "Token expirado" });
  }

  req.user_id = payload.user_id;
  next();
}

module.exports = { createToken, validateToken };

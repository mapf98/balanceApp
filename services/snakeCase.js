const humps = require("humps");

function toSnakeCase(source) {
  if (typeof source == "object" && checkSnake(source) == false) {
    var clone = {};
    for (var prop in source) {
      if (source.hasOwnProperty(prop) && prop.includes("_") == false) {
        clone[humps.decamelize(prop)] = source[prop];
      }
    }
    return clone;
  } else {
    return source;
  }
}

function checkSnake(source) {
  for (var prop in source) {
    if (source.hasOwnProperty(prop) && prop.includes("_") == true) {
      return true;
    }
  }
  return false;
}

function convertToSnakeCase(req, res, next) {
  let source = req.body;
  let bodyCheck = toSnakeCase(source);
  console.log(bodyCheck);
  req.body = bodyCheck;
  next();
}

module.exports = { convertToSnakeCase };

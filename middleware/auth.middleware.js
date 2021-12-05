const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") return next();

  console.log(req.headers);

  try {
    const token = req.headers.authorization.split(" ")[1];

    console.log(token);

    if (!token) {
      return res.status(401).json({ message: "User is not authorized" });
    }

    const decoded = jwt.verify(token, config.get("jwtKey"));

    console.log(decoded);

    req.user = decoded;

    next();
  } catch (e) {
    return res.status(401).json({ message: "Problems with authorization" });
  }
};

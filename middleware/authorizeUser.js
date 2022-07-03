const { verifyJWT } = require("../utils/jwt.utils");

const authorizeUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.replace(/Bearer /, "");

  // no token attached
  if (token === null) return res.status(401).send("No token attached");

  const {
    valid,
    decoded: { id },
  } = verifyJWT(token);

  // invalid token
  if (!valid) return res.status(401).send("Invalid token");

  req.body = { ...req.body, id };
  next();
};
module.exports = {
  authorizeUser,
};

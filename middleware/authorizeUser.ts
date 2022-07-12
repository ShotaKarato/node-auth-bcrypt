import { NextFunction, Request, Response } from "express";

const { verifyJWT } = require("../utils/jwt.utils");

const authorizeUser = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  // multiples ways to rip "Bearer" from authHeader e.g. const token = authHeader && authHeader.split(" ")[1];
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

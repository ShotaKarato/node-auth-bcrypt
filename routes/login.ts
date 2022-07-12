import express from "express";
import validateResources from "../middleware/validateResources";
const routes = express.Router();

import authenticateUserHandler from "../controller/login.controller";
import loginSchema from "../schema/login.schema";

routes.post("/", validateResources(loginSchema), authenticateUserHandler);

module.exports = routes;

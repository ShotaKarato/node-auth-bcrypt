import express from "express";
import validateResources from "../middleware/validateResources";
import createUserHandler from "../controller/signup.controller";
import signupSchema from "../schema/signup.schema";
const routes = express.Router();

routes.post("/", validateResources(signupSchema), createUserHandler);

module.exports = routes;

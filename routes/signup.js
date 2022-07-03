const express = require("express");
const routes = express.Router();

const validateResources = require("../middleware/validateResources");
const { createUserHandler } = require("../controller/signup.controller");

const signupSchema = require("../schema/signup.schema");

routes.post("/", validateResources(signupSchema), createUserHandler);

module.exports = routes;

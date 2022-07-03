const express = require("express");
const routes = express.Router();

const { authenticateUserHandler } = require("../controller/login.controller");
const validateResources = require("../middleware/validateResources");
const loginSchema = require("../schema/login.schema");

routes.post("/", validateResources(loginSchema), authenticateUserHandler);

module.exports = routes;

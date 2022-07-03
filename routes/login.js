const express = require("express");
const { authenticateUserHandler } = require("../controller/login.controller");
const routes = express.Router();

routes.post("/", authenticateUserHandler);

module.exports = routes;

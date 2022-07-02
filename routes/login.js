const express = require("express");
const { authenticateUser } = require("../controller/login.controller");
const routes = express.Router();

routes.post("/", authenticateUser);

module.exports = routes;

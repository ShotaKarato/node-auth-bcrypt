const express = require("express");
const routes = express.Router();
const { createUserHandler } = require("../controller/signup.controller");

routes.post("/", createUserHandler);

module.exports = routes;

const express = require("express");
const routes = express.Router();
const { createUser } = require("../controller/signup.controller");

routes.post("/", createUser);

module.exports = routes;

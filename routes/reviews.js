const express = require("express");

const {
  createReviewHandler,
  getReviewsHandler,
} = require("../controller/review.controller");
const { authorizeUser } = require("../middleware/authorizeUser");

const routes = express.Router();

routes.get("/", authorizeUser, getReviewsHandler);
routes.post("/", authorizeUser, createReviewHandler);
module.exports = routes;

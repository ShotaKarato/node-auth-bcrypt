const express = require("express");
const routes = express.Router();

const {
  createReviewHandler,
  getReviewsHandler,
} = require("../controller/review.controller");
const { authorizeUser } = require("../middleware/authorizeUser");
const validateResources = require("../middleware/validateResources");
const reviewSchema = require("../schema/review.schema");

routes.get("/", authorizeUser, getReviewsHandler);
routes.post(
  "/",
  authorizeUser,
  validateResources(reviewSchema),
  createReviewHandler
);

module.exports = routes;

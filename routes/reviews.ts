import express from "express";
const routes = express.Router();

const {
  createReviewHandler,
  getReviewsHandler,
} = require("../controller/review.controller");
const { authorizeUser } = require("../middleware/authorizeUser");
import validateResources from "../middleware/validateResources";
import reviewSchema from "../schema/review.schema";

routes.get("/", authorizeUser, getReviewsHandler);
routes.post(
  "/",
  authorizeUser,
  validateResources(reviewSchema),
  createReviewHandler
);

module.exports = routes;

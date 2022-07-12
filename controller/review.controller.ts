import { Request, Response } from "express";

const Review = require("../db/model/review.model");

const getReviewsHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const reviews = await Review.find({ reviewer: id });
    return res.status(200).json(reviews);
  } catch (e: any) {
    console.log(e.message);
  }
};

const createReviewHandler = async (req: Request, res: Response) => {
  try {
    const { id: reviewer, title, rate, comment = undefined } = req.body;
    await Review.create({ reviewer, title, rate, comment });
    return res.status(201).send("Review successfully added");
  } catch (e: any) {
    console.log(e.message);
    return res.status(401).send("");
  }
};

module.exports = {
  createReviewHandler,
  getReviewsHandler,
};

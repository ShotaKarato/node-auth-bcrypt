const Review = require("../db/model/review.model");

const getReviewsHandler = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const reviews = await Review.find({ reviewer: id });
  return res.status(200).json(reviews);
};

const createReviewHandler = async (req, res) => {
  try {
    const {
      id: reviewer,
      title,
      rate = undefined,
      comment = undefined,
    } = req.body;
    await Review.create({ reviewer, title, rate, comment });
    return res.status(201).send("Review successfully added");
  } catch (e) {
    console.log(e.message);
    return res.status(401).send("");
  }
};

module.exports = {
  createReviewHandler,
  getReviewsHandler,
};

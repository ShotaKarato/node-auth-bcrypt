const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  reviewer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    min: 0,
    max: 5,
  },
  comment: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = reviewSchema;

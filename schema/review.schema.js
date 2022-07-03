const zod = require("zod");

const reviewSchema = zod.object({
  body: zod.object({
    id: zod.string({ required_error: "Id is required" }),
    title: zod.string({
      required_error: "Title is required",
    }),
    rate: zod
      .number({ required_error: "Title is required" })
      .min(0, "Invalid rate - Rate can't be set lower than 0")
      .max(5, "Invalid rate - Rate can't be set more than 5"),
    comment: zod.string().optional(),
  }),
});

module.exports = reviewSchema;

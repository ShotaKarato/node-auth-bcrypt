import { z } from "zod";

export type reviewDataType = z.infer<typeof reviewSchema>;

const reviewSchema = z.object({
  body: z.object({
    id: z.string({ required_error: "Id is required" }),
    title: z.string({
      required_error: "Title is required",
    }),
    rate: z
      .number({ required_error: "Title is required" })
      .min(0, "Invalid rate - Rate can't be set lower than 0")
      .max(5, "Invalid rate - Rate can't be set more than 5"),
    comment: z.string().optional(),
  }),
});

export default reviewSchema;

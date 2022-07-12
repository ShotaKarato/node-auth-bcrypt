import { z } from "zod";

export type loginDataType = z.infer<typeof loginSchema>;

const loginSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Not a valid email"),
    password: z.string({
      required_error: "Password is required",
    }),
  }),
});

export default loginSchema;

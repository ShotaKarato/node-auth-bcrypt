import { z } from "zod";

export type signupDataType = z.infer<typeof signupSchema>;

const signupSchema = z.object({
  body: z
    .object({
      name: z.string({ required_error: "Name is required" }),
      email: z
        .string({ required_error: "Email is required" })
        .email("Not a valid email"),
      password: z
        .string({ required_error: "Password is required" })
        .min(6, "Password too short - should be more than 6 characters"),
      passwordConfirmation: z.string({
        required_error: "PasswordConfirmation is required",
      }),
    })
    .refine((body) => body.password === body.passwordConfirmation, {
      message: "Passwords do not match",
      path: ["passwordConfirmation"],
    }),
});

export default signupSchema;

const zod = require("zod");

const signupSchema = zod.object({
  body: zod
    .object({
      name: zod.string({ required_error: "Name is required" }),
      email: zod
        .string({ required_error: "Email is required" })
        .email("Not a valid email"),
      password: zod
        .string({ required_error: "Password is required" })
        .min(6, "Password too short - should be more than 6 characters"),
      passwordConfirmation: zod.string({
        required_error: "PasswordConfirmation is required",
      }),
    })
    .refine((body) => body.password === body.passwordConfirmation, {
      message: "Passwords do not match",
      path: ["passwordConfirmation"],
    }),
});

module.exports = signupSchema;

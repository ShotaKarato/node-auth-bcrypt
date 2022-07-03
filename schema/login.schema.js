const zod = require("zod");

const loginSchema = zod.object({
  body: zod.object({
    email: zod
      .string({ required_error: "Email is required" })
      .email("Not a valid email"),
    password: zod.string({
      required_error: "Password is required",
    }),
  }),
});

module.exports = loginSchema;

import * as z from "zod"

export const SignUpSchema = z.object({
  fullname: z.string().min(3, "Full name must be at least 3 characters long."),
  email: z.email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, "Password must be at least 6 characters long.")
})

export type SignUpSchemaTypes = z.infer<typeof SignUpSchema>
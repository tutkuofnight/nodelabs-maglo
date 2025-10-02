import * as z from "zod"

export const SignUpSchema = z.object({
  fullname: z.string().min(3),
  email: z.email({ message: "Please enter a valid email address." }),
  password: z.string().min(6)
})

export type SignUpSchemaTypes = z.infer<typeof SignUpSchema>
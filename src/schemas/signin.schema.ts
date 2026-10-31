import { patterns } from "@/constants/pattern"
import z from "zod"

export const signinSchema = z.object({
    email: z
        .string()
        .nonempty("Email is required")
        .refine((text) => patterns.email.test(text), { message: "Invalid email" }),
    password: z
        .string()
        .nonempty("Password is required")
        .min(8, { message: "Password must be at least of 8 characters" })
})

export type SignInFormData = z.infer<typeof signinSchema>
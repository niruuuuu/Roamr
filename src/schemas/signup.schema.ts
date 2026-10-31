import { z } from "zod"
import { patterns } from "@/constants/pattern"

export const signupSchema = z.object({
    fullname: z
        .string()
        .nonempty("Fullname is required"),
    username: z
        .string()
        .nonempty("Username is required")
        .refine((text) => patterns.username.test(text), { message: "Pick a valid username" }),
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .refine((text) => patterns.email.test(text), { message: "Invalid email" }),
    password: z
        .string()
        .nonempty("Password is required")
        .min(8, { message: "Password must be at least of 8 characters" })
})

export type SignupFormData = z.infer<typeof signupSchema>
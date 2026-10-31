import z from "zod"
import { patterns } from "@/constants/pattern"

export const verifySchema = z.object({
    otp: z
        .string()
        .nonempty("OTP is required")
        .length(6, { message: "OTP must be of 6 numbers" })
        .refine((text) => patterns.otp.test(text), { message: "Invalid OTP" })
})

export type OTP = z.infer<typeof verifySchema>
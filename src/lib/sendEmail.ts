import { VerificationEmail } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { ApiResponse } from '@/types/apiResponse';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(
    username: string,
    email: string,
    otp: string


): Promise<ApiResponse> {
    try {
        const response = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [email],
            subject: 'ROAMR | Verification Code',
            react: VerificationEmail({ username, otp }),
        })
        if (response.data) {
            console.log(response)
            console.log("Email sent successfully")
            return {
                success: true,
                message: "Email sent successfully"
            }
        } else {
            console.log(response)
            console.log("Email not sent")
            return {
                success: false,
                message: "Email not sent"
            }

        }
    } catch (error) {
        console.log("Some error occured while sending verification email | fn sendVerificationEmail", error)
        return {
            success: false,
            message: "Email not sent"
        }
    }
}
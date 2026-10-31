import connectDB from "@/lib/connectDB";
import SessionModel from "@/models/verificationSession.model";
import UserModel from "@/models/user.model";
import crypto from "crypto"
import { sendVerificationEmail } from "@/lib/sendEmail";

export async function GET(request: Request, { params }: { params: Promise<{ email: string }> }) {
    await connectDB()
    const data = await params;
    const { email } = data;

    try {
        const user = await UserModel.findOne({ email })
        if (!user) {
            console.log("User doesn't exist by this email | api/create-verification-session")
            return Response.json({
                success: false,
                message: "Unauthorize request"
            }, { status: 401 })
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString()
        const token = crypto.randomBytes(32).toString("hex")
        const hashedToken = crypto.createHash("sha256").update(token).digest("hex")
        const expiry = new Date()
        expiry.setHours(expiry.getHours() + 1)

        const emailResponse = await sendVerificationEmail(user.username, email, otp)
        if (!emailResponse.success) {
            console.log(emailResponse.message)
            return Response.json({
                success: false,
                message: "Email verification Failed"
            }, { status: 500 })
        }

        user.otp = otp
        user.otpExpiry = expiry
        await user.save()

        const verificationSession = new SessionModel({
            userID: user._id,
            tokenHash: hashedToken,
            expiresAt: expiry
        })
        await verificationSession.save()

        console.log("New otp sent and verification session created")
        const response = Response.json({
            success: true,
            message: "OTP sent",
            username: user.username
        }, { status: 200 })
        response.headers.append(
            "Set-Cookie",
            `verification_token=${token}; HttpOnly; Path=/; Max-Age=600; SameSite=Lax`
        )
        return response

    } catch (error) {
        console.log("Internal server error | api/create-verification-session/{email} route", error)
        return Response.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }

}
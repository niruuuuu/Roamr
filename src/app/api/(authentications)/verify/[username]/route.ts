import UserModel from "@/models/user.model";
import connectDB from "@/lib/connectDB";
import { cookies } from "next/headers"
import SessionModel from "@/models/verificationSession.model";
import crypto from "crypto"

export async function POST(request: Request, { params }: { params: Promise<{ username: string }> }) {
    await connectDB()
    const param = await params
    const data = await request.json()
    console.log(data)
    if (!data.otp && !param.username) {
        console.log("Missing otp or username in the request body | api/verify route");
        return Response.json({
            success: false,
            message: "OTP is required"
        }, { status: 400 })
    }
    const { otp } = data
    const { username } = param

    try {
        const cookieStore = await cookies()
        const token = cookieStore.get("verification_token")?.value
        if (!token) {
            console.log("Verification session token is not available in the cookie | api/verify route");
            return Response.json({
                success: false,
                message: "Unauthorize Request"
            }, { status: 401 })
        }

        const hashedToken = crypto.createHash("sha256").update(token).digest("hex")
        const hashToken = await SessionModel.findOne({ tokenHash: hashedToken })
        if (!hashToken) {
            console.log("Verification session token is not available in the database | api/verify route");
            return Response.json({
                success: false,
                message: "Unauthorize Request"
            }, { status: 401 })
        }

        const user = await UserModel.findOne({ username })
        if (!user) {
            console.log("Username not found in the database | api/verify route");
            return Response.json({
                success: false,
                message: "Invalid User"
            }, { status: 404 })
        }
        if (user.isVerified) {
            console.log("User is already verified | api/verify route");
            return Response.json({
                success: false,
                message: "User is already verified"
            }, { status: 409 })
        }

        if (String(user._id) !== String(hashToken.userID)) {
            console.log("Username user id and hashed token user id is not matching | api/verify route");
            return Response.json({
                success: false,
                message: "Unauthorize Request"
            }, { status: 401 })
        }

        if (otp !== user.otp) {
            console.log("Invalid OTP | api/verify route");
            return Response.json({
                success: false,
                message: "Invalid OTP"
            }, { status: 400 })
        }

        if (user.otpExpiry < new Date()) {
            console.log("OTP expired | api/verify route");
            return Response.json({
                success: false,
                message: "OTP expired"
            }, { status: 400 })
        } else {
            user.isVerified = true;
            await user.save()
            cookieStore.delete("verification_token")
            console.log("User is successfully verified | api/verify route")
            return Response.json({
                success: true,
                message: "Verification successful"
            }, { status: 200 })
        }

    } catch (error) {
        console.log("Internal server error | api/verify route", error)
        return Response.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }

}
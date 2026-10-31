import UserModel from "@/models/user.model";
import connectDB from "@/lib/connectDB";
import { UserSignUpData } from "@/types/user";
import { sendVerificationEmail } from "@/lib/sendEmail";
import crypto from "crypto"
import SessionModel from "@/models/verificationSession.model";

export async function POST(request: Request) {
    await connectDB()
    const data: UserSignUpData = await request.json()

    if (!data.fullname && !data.username && !data.email && !data.password) {
        console.log("Credentials are missing || POST - api/sign-up")
        return Response.json({
            success: false,
            message: "Credentials are missing"
        }, { status: 400 })
    }
    const { fullname, username, email, password } = data;

    try {
        const isUsernameOrEmailExist = await UserModel.findOne({
            $or: [
                { username }, { email }
            ]
        })

        if (isUsernameOrEmailExist) {
            console.log("Username or email already exists || POST - api/sign-up")
            return Response.json({
                success: false,
                message: "Username or email already exists"
            }, { status: 409 })
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString()
        const otpExpiry = new Date()
        otpExpiry.setHours(otpExpiry.getHours() + 1)

        const user = new UserModel({
            fullname,
            email,
            password,
            username,
            otp,
            otpExpiry,
            isVerified: false
        })
        await user.save()

        const emailResponse = await sendVerificationEmail(username, email, otp)
        if (!emailResponse.success) {
            console.log(emailResponse.message)
            return Response.json({
                success: false,
                message: "Email verification Failed"
            }, { status: 500 })
        }

        const token = crypto.randomBytes(32).toString("hex")
        const hashedToken = crypto.createHash("sha256").update(token).digest("hex")
        const verificationSession = new SessionModel({
            userID: user._id,
            tokenHash: hashedToken,
            expiresAt: user.otpExpiry
        })
        await verificationSession.save()

        console.log("User created successfully")
        const response = Response.json({
            success: true,
            message: "User created successfully",
            user
        }, { status: 201 })
        response.headers.append(
            "Set-Cookie",
            `verification_token=${token}; HttpOnly; Path=/; Max-Age=600; SameSite=Lax`
        )
        return response

    } catch (error) {
        console.log("Internal server error || POST - api/sign-up", error)
        return Response.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }   
}
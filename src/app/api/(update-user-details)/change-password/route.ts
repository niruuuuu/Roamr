import connectDB from "@/lib/connectDB";
import UserModel from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import bcrypt from "bcrypt"

export default async function POST(request: NextRequest) {
    await connectDB()
    const { currentPassword, newPassword, confirmNewPassword } = await request.json()
    if (!currentPassword || !newPassword || !confirmNewPassword) {
        console.log("Some password credentials are missing in the request body | api/change-password")
        return NextResponse.json({
            success: false,
            message: "Credentials are missing"
        }, { status: 400 })
    }
    if (newPassword !== confirmNewPassword) {
        console.log("new password and confirm new password not matching | api/change-password")
        return NextResponse.json({
            success: false,
            message: "Credentials aren't matching"
        }, { status: 400 })
    }

    try {
        const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
        if (!token) {
            console.log("token not available | api/change-password")
            return NextResponse.json({
                success: false,
                message: "Token is missing"
            }, { status: 401 })
        }
        const user = await UserModel.findById(token._id)
        if (!user) {
            console.log("user not available in the database with the id | api/change-password")
            return NextResponse.json({
                success: false,
                message: "User not available"
            }, { status: 401 })
        }

        const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password)
        if (!isPasswordCorrect) {
            console.log("current password doesn't match | api/change-password")
            return NextResponse.json({
                success: false,
                message: "current password doesn't match"
            }, { status: 400 })
        }

        user.password = newPassword
        await user.save()

        return NextResponse.json({
            success: true,
            message: "Password changed successfully"
        }, { status: 200 })

    } catch (error) {
        console.log("Internal server error | api/change-password", error)
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}
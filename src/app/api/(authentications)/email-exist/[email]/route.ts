import connectDB from "@/lib/connectDB";
import UserModel from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET(
    request: Request, 
    // { params }: { params: Promise<{ email: string }> }
    context: RouteContext<"/api/email-exist/[email]">
) {
    await connectDB()
    const data = await context.params
    if (!data || !data.email) {
        console.log(`Email missing in the request params | /api/email-exist/{email}`);
        return NextResponse.json({
            success: false,
            message: "Credentials missing"
        }, { status: 400 })
    }
    const { email } = data

    try {
        const isEmailExist = await UserModel.findOne({ email }, { password: 0, otp: 0 })
        if (isEmailExist) {
            console.log(`Email exist | /api/email-exist`);
            return NextResponse.json(
                {
                    success: true,
                    available: false,
                    message: "Email is already taken"
                },
                { status: 200 }
            );
        } else {
            console.log(`Email doesn't exist | /api/email-exist`);
            return NextResponse.json(
                {
                    success: true,
                    available: true,
                    message: "Email is available"
                },
                { status: 200 }
            );
        }

    } catch (error) {
        console.log(`Internal server error | /api/email-exist`, error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}
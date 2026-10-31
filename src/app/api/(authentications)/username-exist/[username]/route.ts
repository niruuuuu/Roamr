import connectDB from "@/lib/connectDB";
import UserModel from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ username: string }> }
) {
    await connectDB();
    const data = await params
    if (!data || !data.username) {
        console.log(`Username missing in the request params | /api/username-exist/{username}`);
        return NextResponse.json({
            success: false,
            message: "Credentials missing"
        }, { status: 400 })
    }
    const { username } = data

    try {
        const usernameExist = await UserModel.findOne({ username }, { password: 0, otp: 0 })
        if (usernameExist) {
            console.log(`Username exist | /api/username-exist`);
            return NextResponse.json(
                {
                    success: true,
                    available: false,
                    message: "Username is already taken"
                },
                { status: 200 }
            );
        } else {
            console.log(`Username doesn't exist | /api/username-exist`);
            return NextResponse.json(
                {
                    success: true,
                    available: true,
                    message: "Username is available"
                },
                { status: 200 }
            );
        }

    } catch (error) {
        console.log(`Internal server error | /api/username-exist`, error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}
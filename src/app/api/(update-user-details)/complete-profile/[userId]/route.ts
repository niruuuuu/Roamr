import connectDB from "@/lib/connectDB";
import UserModel from "@/models/user.model";
import { NextRequest } from "next/server";

interface RouteParams {
    params: Promise<{
        userId: string;
    }>;
}

export async function POST(request: NextRequest, { params }: RouteParams,) {
    await connectDB()
    const { userId } = await params

    try {
        let user = await UserModel.findById(userId)
        if (!user) {
            console.log("User not found by the userId in the params || POST - api/complete-profile/[userId]")
            return Response.json({
                success: false,
                message: "User not found"
            }, { status: 404 })
        }
        
        if (user.gender) {
            console.log("User is not authorized to request the api (profile completion already complete) || POST - api/complete-profile/[userId]")
            return Response.json({
                success: false,
                message: "You are not authorized to perform this action"
            }, { status: 403 })
        }
        
        const data = await request.json()
        user = await UserModel.findByIdAndUpdate(userId, {
            $set: { ...data }
        }, {
            returnDocument: "after",
            projection: {
                password: 0
            }
        })
        
        return Response.json({
            success: true,
            message: "Testing",
            data: {
                user
            }
        }, { status: 200 })

    } catch (error) {
        console.log("Internal server error || POST - api/complete-profile/[userId]", error)
        return Response.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}
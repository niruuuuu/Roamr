import connectDB from "@/lib/connectDB";
import UserModel from "@/models/user.model";
import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/(authentications)/auth/[...nextauth]/options";
import uploadFile from "@/lib/upload";

export async function POST(request: NextRequest) {
    await connectDB()

    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            console.log("User not found by the userId in the params || POST - api/complete-profile/[userId]")
            return Response.json({
                success: false,
                message: "Unauthorized"
            }, { status: 401 })
        }
        let user = await UserModel.findById(session.user._id)
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
        
        // const data = await request.json()
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())

        if (formData.get("profilePicture")) {
            const profilePicture = formData.get("profilePicture")
            if (profilePicture instanceof File) {
                const picture = await uploadFile(profilePicture)
                data.profilePicture = picture.url
            }
        }

        user = await UserModel.findByIdAndUpdate(session.user._id, {
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
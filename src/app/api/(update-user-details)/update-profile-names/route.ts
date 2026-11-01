import connectDB from "@/lib/connectDB";
import UserModel from "@/models/user.model";
import { getServerSession } from "next-auth";
import { authOptions } from "../../(authentications)/auth/[...nextauth]/options";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
    await connectDB()

    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            console.log("Session missing || PATCH - api/update-profile-names")
            return Response.json({
                success: false,
                message: "Unauthorized"
            }, { status: 401 })
        }

        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())

        const user = await UserModel.findByIdAndUpdate(
            session.user?._id,
            { $set: { ...data } },
            {
                returnDocument: "after",
                projection: { password: 0 }
            }
        )

        if (!user) {
            console.log("User not found by the id in the session object || PATCH - api/update-profile-names")
            return Response.json({
                success: false,
                message: "Unauthorized"
            }, { status: 404 })
        }

        return Response.json({
            success: true,
            message: "Profile updated successfully",
            data: user
        }, { status: 200 })
        
    } catch (error) {
        console.log("Internal server error || PATCH - api/update-profile-names", error)
        return Response.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })

    }
}
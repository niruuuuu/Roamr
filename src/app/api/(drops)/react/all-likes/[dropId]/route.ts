import connectDB from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/(authentications)/auth/[...nextauth]/options";
import DropModel from "@/models/drop.model";
import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";

export async function GET(request: NextRequest, { params }: { params: Promise<{ dropId: string }> }) {
    await connectDB()

    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            console.log("Authentication Failed - session missing | api/react/all-likes/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Unauthorized"
            }, { status: 401 })
        }
        const userId = new Types.ObjectId(session.user._id)
        const { dropId } = await params
        if (!Types.ObjectId.isValid(dropId)) {
            console.log("Invalid drop id | api/react/all-likes/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Invalid drop id"
            }, { status: 400 })
        }

        const likes = await DropModel.aggregate([
            {
                $match: { _id: new Types.ObjectId(dropId) }
            },
            {
                $project: { likes: 1 }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "likes",
                    foreignField: "_id",
                    as: "likes"
                }
            },
            {
                $project: {
                    likes: {
                        username: 1, fullname: 1, profilePicture: 1
                    }
                }
            }
        ])

        if (!likes) {
            console.log("Some error at fetching likes from database | api/react/all-likes/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Internal server error"
            }, { status: 500 })
        }

        return NextResponse.json({
            success: true,
            message: "Likes fetched successfully",
            data: likes
        }, { status: 200 })

    } catch (error) {
        console.log("Internal server error | api/react/all-likes/[dropId]", error)
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}
import connectDB from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/(authentications)/auth/[...nextauth]/options";
import DropModel from "@/models/drop.model";
import { NextRequest, NextResponse } from "next/server";
import uploadFile from "@/lib/upload";
import { Types } from "mongoose";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ dropId: string }> }) {
    await connectDB()

    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            console.log("Authentication Failed - session missing | api/react/like/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Unauthorized"
            }, { status: 401 })
        }
        const userId = new Types.ObjectId(session.user._id)

        const { dropId } = await params
        if (!Types.ObjectId.isValid(dropId)) {
            console.log("Invalid drop id | api/react/like/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Invalid drop id"
            }, { status: 400 })
        }

        const drop = await DropModel.findByIdAndUpdate(
            dropId,
            [
                {
                    $set: {
                        likes: {
                            $cond: [
                                { $in: [userId, "$likes"] },
                                {
                                    $filter: {
                                        input: "$likes",
                                        as: "likes",
                                        cond: { $ne: ["$$likes", userId] }
                                    }
                                },
                                {
                                    $concatArrays: ["$likes", [userId]]
                                }
                            ]
                        }
                    }
                }
            ],
            {
                returnDocument: "after",
                updatePipeline: true
            }
        )

        if (!drop) {
            console.log("No drops found with the dropId or error at the database | api/drop/delete/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Drop not found"
            }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            message: "Drop liked successfully",
            data: drop
        }, { status: 200 })

    } catch (error) {
        console.log("Internal server error | api/react/like/[dropId]", error)
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })

    }
}
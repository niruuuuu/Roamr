import connectDB from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/(authentications)/auth/[...nextauth]/options";
import DropModel from "@/models/drop.model";
import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";
import CommentModel from "@/models/comments.model";

export async function POST(request: NextRequest, { params }: { params: Promise<{ dropId: string }> }) {
    await connectDB()

    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            console.log("Authentication Failed - session missing | pi/comments/upload/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Unauthorized"
            }, { status: 401 })
        }

        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())

        const { dropId } = await params
        if (!Types.ObjectId.isValid(dropId)) {
            console.log("Invalid drop id | api/comments/upload/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Invalid drop id"
            }, { status: 400 })
        }

        const comment = await CommentModel.create({
            comment: typeof data.comment == 'string' ? data.comment : undefined,
            userId: session.user?._id,
            dropId
        })

        if (!comment) {
            console.log("unable to create comment in the database | api/comments/upload/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Failed to upload comment"
            }, { status: 400 })
        }

        const drop = await DropModel.findByIdAndUpdate(
            dropId,
            {
                $push: {
                    comments: comment._id
                }
            }
        )

        return NextResponse.json({
            success: true,
            message: "Comment uploaded successfully",
            data: comment
        }, { status: 201 })

    } catch (error) {
        console.log("Internal server error | api/comments/upload/[dropId]", error)
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}
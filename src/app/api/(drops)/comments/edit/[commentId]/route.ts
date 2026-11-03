import connectDB from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/(authentications)/auth/[...nextauth]/options";
import DropModel from "@/models/drop.model";
import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";
import CommentModel from "@/models/comments.model";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ commentId: string }> }) {
    await connectDB()

    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            console.log("Authentication Failed - session missing | pi/comments/edit/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Unauthorized"
            }, { status: 401 })
        }
        const userId = new Types.ObjectId(session.user._id)

        const { commentId } = await params
        if (!Types.ObjectId.isValid(commentId)) {
            console.log("Invalid comment id | api/comments/edit/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Invalid comment id"
            }, { status: 400 })
        }

        let comment = await CommentModel.findById(commentId)
        if (!comment) {
            console.log("Comment id not found in the db | api/comments/edit/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Comment id not found"
            }, { status: 404 })
        }

        if (!comment.userId.equals(userId)) {
            console.log("User is not authorize to edit this drop | api/comments/edit/[dropId]")
            return NextResponse.json({
                success: false,
                message: "You can't edit this comment"
            }, { status: 403 })
        }

        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        comment.comment = data.comment as string

        return NextResponse.json({
            success: true,
            message: "Comment edited successfully",
            data: comment
        }, { status: 200 })



    } catch (error) {
        console.log("Internal server error | api/comments/edit/[dropId]", error)
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}
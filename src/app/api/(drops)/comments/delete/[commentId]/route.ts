import connectDB from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/(authentications)/auth/[...nextauth]/options";
import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";
import CommentModel from "@/models/comments.model";

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ commentId: string }> }) {
    await connectDB()

    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            console.log("Unauthorized request - session missing | api/comments/delete/[commentId]")
            return NextResponse.json({
                success: false,
                message: "Unauthorized"
            }, { status: 401 })
        }
        const { commentId } = await params
        if (!Types.ObjectId.isValid(commentId)) {
            console.log("Invalid comment id | api/comments/delete/[commentId]")
            return NextResponse.json({
                success: false,
                message: "Invalid comment id"
            }, { status: 400 })
        }
        let comment = await CommentModel.findById(commentId)
        if (!comment) {
            console.log("Comment id not found in the db | api/comments/delete/[commentId]")
            return NextResponse.json({
                success: false,
                message: "Comment id not found"
            }, { status: 404 })
        }

        if (!comment.userId.equals(session.user._id)) {
            console.log("User is not authorize to delete this drop | api/comments/delete/[commentId]")
            return NextResponse.json({
                success: false,
                message: "You can't edit this comment"
            }, { status: 403 })
        }

        if (!comment.dropId.equals(session.user._id)) {
            console.log("User is not authorize to delete this drop | api/comments/delete/[commentId]")
            return NextResponse.json({
                success: false,
                message: "You can't edit this comment"
            }, { status: 403 })
        }

        comment = await CommentModel.findByIdAndDelete(commentId)

        return NextResponse.json({
            success: true,
            message: "Comment deleted successfully",
            data: comment
        }, { status: 200 })

    } catch (error) {
        console.log("Internal server error | api/comments/delete/[commentId]", error)
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}
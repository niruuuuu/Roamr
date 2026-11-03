import connectDB from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/(authentications)/auth/[...nextauth]/options";
import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";
import CommentModel from "@/models/comments.model";

export async function GET(request: NextRequest, { params }: { params: Promise<{ dropId: string }> }) {
    await connectDB()

    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            console.log("Unauthorized request - session missing | api/comments/get-all-comments/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Unauthorized"
            }, { status: 401 })
        }

        const { dropId } = await params
        if (!Types.ObjectId.isValid(dropId)) {
            console.log("Invalid drop id | api/comments/get-all-comments/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Invalid drop id"
            }, { status: 400 })
        }

        const comments = await CommentModel.find({ dropId })
        if (!comments) {
            console.log("Database error fetching comments | api/comments/get-all-comments/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Internal server error"
            }, { status: 500 })
        }

        return NextResponse.json({
            success: true,
            message: "Comments fetched successfully",
            data: comments
        }, { status: 200 })

    } catch (error) {
        console.log("Internal server error | api/comments/get-all-comments/[dropId]", error)
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}
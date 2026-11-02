import connectDB from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/(authentications)/auth/[...nextauth]/options";
import DropModel from "@/models/drop.model";
import { NextRequest, NextResponse } from "next/server";
import uploadFile from "@/lib/upload";
import { Types } from "mongoose";

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ dropId: string }> }) {
    await connectDB()

    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            console.log("Authentication Failed - session missing | api/drop/delete/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Unauthorized"
            }, { status: 401 })
        }

        const { dropId } = await params
        if (!Types.ObjectId.isValid(dropId)) {
            console.log("Invalid drop id | api/drop/delete/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Invalid drop id"
            }, { status: 400 })
        }

        let drop = await DropModel.findById(dropId)
        if (!drop) {
            console.log("No drops found with the dropId | api/drop/delete/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Drop not found"
            }, { status: 404 })
        }

        if (drop.author.toString() !== session.user._id) {
            console.log("User is not authorize to delete this drop | api/drop/delete/[dropId]")
            return NextResponse.json({
                success: false,
                message: "You can't delete this drop"
            }, { status: 403 })
        }

        drop = await DropModel.findByIdAndDelete(dropId)

        return NextResponse.json({
            success: true,
            message: "Drop deleted successfully",
            data: drop
        }, { status: 200 })



    } catch (error) {
        console.log("Internal server error | api/drop/delete/[dropId]", error)
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }

}
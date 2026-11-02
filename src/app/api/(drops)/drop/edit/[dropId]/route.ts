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
            console.log("Authentication Failed - session missing | api/drop/edit/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Unauthorized"
            }, { status: 401 })
        }

        const { dropId } = await params
        if (!Types.ObjectId.isValid(dropId)) {
            console.log("Invalid drop id | api/drop/edit/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Invalid drop id"
            }, { status: 400 })
        }

        let drop = await DropModel.findById(dropId)
        if (!drop) {
            console.log("No drops found with the dropId | api/drop/edit/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Drop not found"
            }, { status: 404 })
        }

        if (drop.author.toString() !== session.user._id) {
            console.log("User is not authorize to edit this drop | api/drop/edit/[dropId]")
            return NextResponse.json({
                success: false,
                message: "You can't edit this drop"
            }, { status: 403 })
        }

        const formData = await request.formData()
        const data = Object.fromEntries([...formData.entries()].filter(([key]) => key !== "photos"))

        if (data.author) {
            console.log("Requesting to the author id in the drop document | api/drop/edit/[dropId]")
            return NextResponse.json({
                success: false,
                message: "Drop not found"
            }, { status: 403 })
        }

        if (formData.get("photos")) {
            const photos = formData.getAll("photos")
            const photoString: string[] = []
            for (const photo of photos) {
                if (photo instanceof File) {
                    const uploadImage = await uploadFile(photo)
                    console.log(uploadFile)
                    photoString.push(uploadImage.url)
                }
            }
            drop = await DropModel.findByIdAndUpdate(
                dropId,
                {
                    $set: {
                        photos: photoString,
                        ...data
                    }
                },
                { returnDocument: "after" }
            )

        } else {
            drop = await DropModel.findByIdAndUpdate(
                dropId,
                { $set: { ...data } },
                { returnDocument: "after" }
            )
        }

        return NextResponse.json({
            success: true,
            message: "Drop updated successfully",
            data: drop
        }, { status: 200 })

    } catch (error) {
        console.log("Internal server error | api/drop/edit/[dropId]", error)
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}
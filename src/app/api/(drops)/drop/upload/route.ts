import connectDB from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/(authentications)/auth/[...nextauth]/options";
import DropModel from "@/models/drop.model";
import { NextRequest, NextResponse } from "next/server";
import uploadFile from "@/lib/upload";

export async function POST(request: NextRequest) {
    await connectDB()

    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            console.log("Authentication Failed - session missing | api/drop/upload")
            return NextResponse.json({
                success: false,
                message: "Unauthorized"
            }, { status: 401 })
        }

        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        let drop;

        if (formData.get("photos")) {
            const photos = formData.getAll("photos")
            const photoString: string[] = []
            for (const photo of photos) {
                if (photo instanceof File) {
                    const uploadImage = await uploadFile(photo)
                    photoString.push(uploadImage.url)
                }
            }
            // console.log(photoString)
            drop = await DropModel.create({
                caption: typeof data.caption == "string" ? data.caption : undefined,
                photos: photoString,
                author: session.user._id
            })
        } else {
            drop = await DropModel.create({
                caption: typeof data.caption == "string" ? data.caption : undefined,
                author: session.user._id
            })
        }

        if (!drop) {
            console.log("Some database error - Failed to create drop | api/drop/upload")
        }

        return NextResponse.json({
            success: true,
            message: "Drop uploaded successfully",
            data: drop
        }, { status: 201 })

    } catch (error) {
        console.log("Internal server error | api/drop/upload", error)
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }
}
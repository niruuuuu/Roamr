import { NextResponse } from "next/server"

export default async function GET () {
    console.log("Request has been redirected to api/invalid-request")
    return NextResponse.json({
        success: false,
        message: "Invalid request"
    }, { status: 400 })
}
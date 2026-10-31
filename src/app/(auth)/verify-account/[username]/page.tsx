import VerifyForm from "./VerifyForm"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import crypto from "crypto"
import SessionModel from "@/models/verificationSession.model"
import UserModel from "@/models/user.model"

async function page() {
    const cookieStore = await cookies()
    const token = cookieStore.get("verification_token")?.value
    if (!token) {
        return redirect("/sign-in")
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex")
    const hashToken = await SessionModel.findOne({ tokenHash: hashedToken })
    if (!hashToken || hashToken.expiresAt < new Date()) {
        return redirect("/sign-in")
    }
    
    const user = await UserModel.findById(hashToken.userID, { username: 1, fullname: 1, email: 1 });
    if (!user) {
        return redirect("/sign-in")
    }

    return (
        <VerifyForm email={user.email} />
    )
}

export default page

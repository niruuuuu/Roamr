"use client"
import { useSession } from "next-auth/react"
import Main from "@/components/ui-components/profile/main/Main"
import SideCard from "@/components/ui-components/profile/side/SideCard"

const page = () => {
    const session = useSession()
    
    return (
        <div
            className="w-[80vw] min-h-screen flex overflow-x-hidden ml-[20vw]"
        >
            <Main />
            <SideCard />
        </div>
    )
}

export default page

"use client"
import { Leftbar } from "@/components/ui-components/settings/Leftbar"
import { ReactNode } from "react"
import { useTheme } from "@mui/material"

function page ({ children }: { children: ReactNode }) {
    const theme = useTheme()
    
    return (
        <div
            className='w-full min-h-screen flex overflow-x-hidden'
            style={{
                backgroundColor: theme.palette.background.default
            }}
        >
            <Leftbar />
            { children }
        </div>
    )
}

export default page

"use client"
import { useTheme } from "@mui/material"

export default function page() {
    const theme = useTheme()

    return (
        <div className="w-[80vw] min-h-screen flex flex-col items-start overflow-x-hidden ml-[20vw] py-3">
            <div>
                <div>
                    <span
                        className="text-xl font-bold"
                        style={{
                            color: theme.palette.text.primary
                        }}
                    >
                        Profile privacy
                    </span>
                </div>
                <div className="mt-8 flex flex-col gap-6" >

                </div>
            </div>
        </div>
    )
}
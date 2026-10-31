"use client"
import { useTheme } from "@mui/material"
import Info from "./Info"

const Main = () => {
    const theme = useTheme()

    return (
        <div className="w-[60vw] flex flex-col items-center py-3">
            <Info />
        </div>
    )
}

export default Main

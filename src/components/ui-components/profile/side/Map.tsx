"use client"
import { useTheme } from "@mui/material"
import MapIcon from '@mui/icons-material/Map';

const Map = () => {
    const theme = useTheme()

    return (
        <div className="p-4 rounded-md flex flex-col gap-6"
            style={{
                backgroundColor: theme.palette.card,
                border: `1px solid ${theme.palette.divider}`
            }}
        >
            <h1
                className="text-[16px] font-semibold"
                style={{
                    color: theme.palette.cyan
                }}
            >
                MAP
            </h1>
            <div
                className="w-full flex justify-center gap-2 py-4 rounded-md cursor-pointer"
                style={{
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.card2
                }}
            >
                <MapIcon />
                Explore Map
            </div>

        </div>
    )
}

export default Map

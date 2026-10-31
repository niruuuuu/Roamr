"use client"
import { useTheme } from "@mui/material"
import Button from "@mui/material/Button"
import MapIcon from '@mui/icons-material/Map';

const MapBox = () => {
    const theme = useTheme()

    return (
        <div
            className="p-4 rounded-md flex flex-col gap-6"
            style={{
                backgroundColor: theme.palette.card,
                border: `1px solid${theme.palette.primary.main}`
            }}
        >
            <div className="flex flex-col space-y-1">
                <p
                    className="text-[14px] font-medium tracking-wider"
                    style={{
                        color: theme.palette.primary.main
                    }}
                >
                    NEARBY DROP
                </p>
                <h1
                    className="text-[20px] font-semibold"
                    style={{
                        color: theme.palette.text.primary
                    }}
                >
                    23 ppl drifting near Bashundhara rn
                </h1>
            </div>
            <div>
                <Button variant="contained" fullWidth className="space-x-1">
                    <MapIcon />
                    Open nearby map
                </Button>
            </div>

        </div>
    )
}

export default MapBox

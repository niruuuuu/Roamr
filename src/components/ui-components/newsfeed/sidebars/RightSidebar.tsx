"use client"
import { Box } from "@mui/material"
import TrendingBox from "./TrendingBox"
import ServerBox from "./ServerBox"
import MapBox from "./MapBox"

const RightSidebar = () => {
    return (
        <Box
            component={"aside"}
            sx={{
                width: "20vw",
                flexShrink: 0,
                height: "100vh",
                overflow: "hidden",
                borderRight: 1,
                borderColor: "divider",
                px: 3,
                py: 3,
                display: "flex",
                flexDirection: "column",
                gap: 3
            }}
        >
            <TrendingBox />
            <ServerBox />
            <MapBox />
        </Box>
    )
}

export default RightSidebar

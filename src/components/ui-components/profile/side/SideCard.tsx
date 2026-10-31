"use client"
import { Box } from "@mui/material"
import Server from "./Servers"
import Map from "./Map"


const SideCard = () => {
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
            <Server />
            <Map />

        </Box>
    )
}

export default SideCard

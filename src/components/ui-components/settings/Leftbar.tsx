"use client"
import { useTheme } from "@mui/material"

import { Box } from "@mui/material";
import Link from "next/link";

import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import BlockFlippedIcon from '@mui/icons-material/BlockFlipped';

export function Leftbar () {
    const theme = useTheme()

    return (
        <Box
            component={"aside"}
            sx={{
                width: "20vw",
                boxSizing: "border-box",
                height: "100dvh",
                overflowY: "auto",
                borderRight: 1,
                borderColor: "divider",
                px: 3,
                py: 3,
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1200,
                bgcolor: theme.palette.background.default
            }}
        >
            <Link href={"/"}>
                <h1 className="font-bold text-2xl"
                    style={{
                        color: theme.palette.primary.main,
                    }}
                >ROAMR</h1>
                <p className="text-[16px]"
                    style={{
                        color: theme.palette.text.secondary
                    }}
                >Keep Roaming</p>
            </Link>

            <div className="flex flex-col mt-8">
                <Link href="/settings/edit"
                    className="flex gap-3 items-center cursor-pointer px-4 py-4 rounded-md border border-transparent
                    hover:bg-[#0e131b] hover:border-[#1e2532]"
                >
                    <PersonIcon color="primary" />
                    <span className="font-semibold"
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >
                        Edit profile
                    </span>
                </Link>
                <Link href="/settings/profile-privacy"
                    className="flex gap-3 items-center cursor-pointer px-4 py-4 rounded-md border border-transparent
                    hover:bg-[#0e131b] hover:border-[#1e2532]"
                >
                    <HttpsIcon color="primary" />
                    <span className="font-semibold"
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >
                        Profile privacy
                    </span>
                </Link>
                <Link href="/settings/change-password"
                    className="flex gap-3 items-center cursor-pointer px-4 py-4 rounded-md border border-transparent
                    hover:bg-[#0e131b] hover:border-[#1e2532]"
                >
                    <BlockFlippedIcon color="primary" />
                    <span className="font-semibold"
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >
                        Change passowrd
                    </span>
                </Link>
            </div>
        </Box>
    )
}
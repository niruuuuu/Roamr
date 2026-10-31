"use client"
import { Typography, useTheme } from "@mui/material";
import Link from "next/link";

// icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupsIcon from "@mui/icons-material/Groups";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import SendIcon from "@mui/icons-material/Send";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from '@mui/icons-material/Settings';

// mui components
import { Box } from "@mui/material";
import Home from "@/app/page";

// skeleton components
import LeftBarSkeleton from "@/components/skeleton-components/LeftBarSkeleton";
import { useState } from "react";

const Sidebar = () => {
    const theme = useTheme()
    const [loading, setLoading] = useState(false)

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
            <div>
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
            </div>
            <div className="flex flex-col mt-8">
                <Link
                    href="/"
                    className="flex gap-3 items-center cursor-pointer px-4 py-4 rounded-md border border-transparent
                    hover:bg-[#0e131b] hover:border-[#1e2532]"
                >
                    <HomeOutlinedIcon color="primary" />
                    <span className="font-semibold"
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >
                        Home
                    </span>
                </Link>
                <div
                    className="flex gap-3 items-center cursor-pointer px-4 py-4 rounded-md border border-transparent
                    hover:bg-[#0e131b] hover:border-[#1e2532]"
                >
                    <ExploreIcon color="primary" />
                    <span className="font-semibold"
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >
                        Explore
                    </span>
                </div>
                <div
                    className="flex gap-3 items-center cursor-pointer px-4 py-4 rounded-md border border-transparent
                    hover:bg-[#0e131b] hover:border-[#1e2532]"
                >
                    <GroupsIcon color="primary" />
                    <span className="font-semibold"
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >
                        Communities
                    </span>
                </div>
                <div
                    className="flex gap-3 items-center cursor-pointer px-4 py-4 rounded-md border border-transparent
                    hover:bg-[#0e131b] hover:border-[#1e2532]"
                >
                    <SmartDisplayOutlinedIcon color="primary" />
                    <span className="font-semibold"
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >
                        Loops
                    </span>
                </div>
                <div
                    className="flex gap-3 items-center cursor-pointer px-4 py-4 rounded-md border border-transparent
                    hover:bg-[#0e131b] hover:border-[#1e2532]"
                >
                    <SendIcon color="primary" />
                    <span className="font-semibold"
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >
                        DMs
                    </span>
                </div>
                <div
                    className="flex gap-3 items-center cursor-pointer px-4 py-4 rounded-md border border-transparent
                    hover:bg-[#0e131b] hover:border-[#1e2532]"
                >
                    <NotificationsIcon color="primary" />
                    <span className="font-semibold"
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >
                        Signals
                    </span>
                </div>
            </div>
            {
                loading ? (
                    <LeftBarSkeleton />
                ) : (
                    <div className="mt-auto flex justify-between rounded-md items-center px-3"
                        style={{
                            backgroundColor: theme.palette.card,
                            border: `1px solid ${theme.palette.divider}`
                        }}
                    >
                        <Link
                            href="/profile"
                            className=" flex gap-3 items-center h-20 cursor-pointer"
                        >
                            <div className="">
                                <img
                                    src="https://scontent.cdninstagram.com/v/t51.82787-19/650043346_18242863135305265_7762989960277201012_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=102&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=tEFhS6Gq5oQQ7kNvwHMBv6G&_nc_oc=AdoSK04WQuer4URR94zVZjZdkaWXY2047ho2LEEwZVxmy6u2AihRdWVd1-ebFC_LAd0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=KsHPjyXUHyDxfWbp-n0Ccg&_nc_ss=7baaf&oh=00_AQP4si53mTBB-AtxCrVNE8vam3p4k1TdK5WgfQrGNIpHeQ&oe=6AD13C95"
                                    alt=""
                                    className="w-13 h-13 rounded-full"
                                />
                            </div>
                            <div>
                                <p className="text-[18px] font-semibold"
                                    style={{
                                        color: theme.palette.text.primary
                                    }}
                                >
                                    Abir Hassan
                                </p>
                                <p className="text-18 font-light"
                                    style={{
                                        color: theme.palette.text.secondary
                                    }}
                                >
                                    @niroooob
                                </p>
                            </div>
                        </Link>
                        <div>
                            <SettingsIcon
                                sx={{
                                    color: theme.palette.text.secondary
                                }}
                            />
                        </div>
                    </div>
                )
            }
        </Box>
    )
}

export default Sidebar

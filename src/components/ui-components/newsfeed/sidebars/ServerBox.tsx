"use client"
import ServerSkeleton from "@/components/skeleton-components/rightbar-skeletons/ServerSkeleton"
import { useTheme } from "@mui/material"
import Button from "@mui/material/Button"
import { useState } from "react"

const ServerBox = () => {
    const theme = useTheme()
    const [isLoading, setIsLoading] = useState(true)

    const servers = [
        {
            id: 1,
            name: "gsoc companies",
            members: "128k",
        },
        {
            id: 2,
            name: "travel sylhet",
            members: "98k",
        },
        {
            id: 3,
            name: "mit fall",
            members: "61k",
        },
    ]


    return (
        <div className="p-4 rounded-md flex flex-col gap-6"
            style={{
                backgroundColor: theme.palette.card,
                border: `1px solid ${theme.palette.divider}`
            }}
        >
            <div className="">
                <h1
                    className="text-18 font-semibold"
                    style={{
                        color: theme.palette.text.primary
                    }}
                >
                    Servers for you
                </h1>
                <p
                    className="text-14 font-medium"
                    style={{
                        color: theme.palette.text.secondary
                    }}
                >
                    based on your vibe + location
                </p>
            </div>
            <div className="flex flex-col gap-4">
                {
                    isLoading ? (
                        <ServerSkeleton />
                    ) : (
                        servers.map((server) => (
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4 cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800"> {/* group image */}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-18 font-bold"
                                            style={{
                                                color: theme.palette.text.primary
                                            }}
                                        >
                                            {server.name}
                                        </p>
                                        <p className="text-16 font-medium"
                                            style={{
                                                color: theme.palette.text.secondary
                                            }}
                                        >
                                            {server.members} members
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    sx={{
                                        backgroundColor: theme.palette.secondary.main
                                    }}
                                >
                                    Join
                                </Button>

                            </div>
                        ))
                    )
                }
            </div>

        </div>
    )
}

export default ServerBox

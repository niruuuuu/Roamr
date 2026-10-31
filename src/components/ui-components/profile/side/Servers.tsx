"use client"
import { Button, useTheme } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

const Server = () => {
    const theme = useTheme()

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
            </div>
            <div className="flex flex-col gap-4">
                {
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

                        </div>
                    ))
                }
            </div>

            <div>
                <div
                    className="w-full flex justify-center gap-2 py-4 rounded-md cursor-pointer"
                    style={{
                        color: theme.palette.text.primary,
                        border: `1px dotted ${theme.palette.divider}`
                    }}
                >
                    <AddIcon />
                    Start a server
                </div>
            </div>

        </div>
    )
}

export default Server

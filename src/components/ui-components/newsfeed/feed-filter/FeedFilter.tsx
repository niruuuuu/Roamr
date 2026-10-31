"use client"
import { useTheme } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TuneIcon from '@mui/icons-material/Tune';
import TagIcon from '@mui/icons-material/Tag';

const servers = [
    { name: "Streetwear", active: true },
    { name: "Indie music", active: false },
    { name: "Travel", active: false },
    { name: "Football", active: true },
    { name: "Coding", active: false },
    { name: "Techwears", active: true },
    { name: "Anime", active: false },
    { name: "Films", active: false },
]

const FeedFilter = () => {
    const theme = useTheme()

    return (
        <div
            className="flex flex-col rounded-md p-3"
            style={{
                backgroundColor: theme.palette.card,
                border: `1px solid ${theme.palette.divider}`
            }}
        >
            <div
                className="flex p-2 gap-3"
            >
                <div
                    className="w-[93%] rounded-md p-2 flex"
                    style={{
                        border: `1px solid ${theme.palette.divider}`
                    }}
                >
                    <div
                        className="w-1/3 flex gap-2 justify-center py-2 rounded-md cursor-pointer"
                        style={{
                            backgroundColor: theme.palette.primary.main
                        }}
                    >
                        <Diversity3Icon
                            sx={{
                                color: theme.palette.primary.contrastText
                            }}
                        />
                        <span
                            className='font-medium'
                            style={{
                                color: theme.palette.primary.contrastText
                            }}
                        >
                            Following
                        </span>
                    </div>
                    <div
                        className="w-1/3 flex gap-2 justify-center py-2 rounded-md cursor-pointer"
                    >
                        <GpsFixedIcon
                            sx={{
                                color: theme.palette.text.secondary
                            }}
                        />
                        <span
                            className='font-medium'
                            style={{
                                color: theme.palette.text.secondary
                            }}
                        >
                            Nearby 2km
                        </span>
                    </div>
                    <div
                        className="w-1/3 flex gap-2 justify-center py-2 rounded-md cursor-pointer"
                    >
                        <FmdGoodIcon
                            sx={{
                                color: theme.palette.text.secondary
                            }}
                        />
                        <span
                            className='font-medium'
                            style={{
                                color: theme.palette.text.secondary
                            }}
                        >
                            Dhaka
                        </span>
                    </div>
                </div>
                <div
                    className='w-[7%] rounded-md flex justify-center items-center cursor-pointer'
                    style={{
                        border: `1px solid ${theme.palette.divider}`
                    }}
                >
                    <TuneIcon
                        sx={{
                            color: theme.palette.text.primary
                        }}
                    />
                </div>
            </div>
            <div className='w-full flex items-center gap-3 overflow-hidden'>
                <div className='space-x-1'>
                    <TagIcon
                        sx={{
                            color: theme.palette.cyan
                        }}
                    />
                    <span
                        className='font-medium text-[14px]'
                        style={{
                            color: theme.palette.cyan
                        }}
                    >
                        Servers:
                    </span>
                </div>

                {
                    servers ? (
                        servers.map((server) => (
                            <div 
                                className='p-2 rounded-md cursor-pointer' key={server.name}
                                style={{
                                    backgroundColor: `${server.active ? theme.palette.text.primary : "none"}`,
                                    border: `${server.active ? `none` : `1px solid ${theme.palette.divider}`}`
                                }}
                            >
                                <span
                                    className='font-medium text-[14px]'
                                    style={{
                                        color: `${server.active ? theme.palette.primary.contrastText : theme.palette.text.secondary}`
                                    }}
                                >
                                    {server.name}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div>
                            No servers to show
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default FeedFilter

"use client"
import { useTheme } from "@mui/material"
import VerifiedIcon from '@mui/icons-material/Verified';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import { useState } from "react";
import DropSkeleton from "@/components/skeleton-components/drop-skeleton/DropSkeleton";

interface Drop {
    fullname: string;
    username: string;
    profilePicture: string;
    isVerified: boolean;
    caption: string;
    picture: string;
    date: string;
    hashtag: string;
    mood: string;
}

const Dropcard = ({
    fullname,
    username,
    profilePicture,
    isVerified,
    caption,
    picture,
    date,
    hashtag,
    mood
}: Drop) => {
    const theme = useTheme()
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div
            className="p-3 rounded-md flex flex-col gap-3"
            style={{ 
                backgroundColor: theme.palette.card,
                border: `1px solid ${theme.palette.divider}`
            }}
        >
            {
                isLoading ? (
                    <DropSkeleton />
                ) : (
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div>
                                    <img src={profilePicture} className="w-14 h-14 max-w-14 max-h-14 shrink-0 object-cover rounded-full" />
                                </div>
                                <div>
                                    <div className="flex gap-2 items-center">
                                        <div>
                                            <p
                                                className="text-[16px] font-medium"
                                                style={{
                                                    color: theme.palette.text.primary
                                                }}
                                            >
                                                {fullname}
                                            </p>
                                        </div>
                                        <div>
                                            {
                                                isVerified ? (
                                                    <VerifiedIcon
                                                        sx={{
                                                            color: theme.palette.text.secondary,
                                                            fontSize: "14px"
                                                        }}
                                                    />
                                                ) : (
                                                    <NewReleasesIcon
                                                        sx={{
                                                            color: theme.palette.text.secondary,
                                                            fontSize: "14px"
                                                        }}
                                                    />
                                                )
                                            }
                                        </div>
                                        <div>
                                            <p
                                                className="text-[14px] font-medium"
                                                style={{
                                                    color: theme.palette.text.secondary
                                                }}
                                            >
                                                @{username}
                                            </p>
                                        </div>
                                        <div>
                                            <p
                                                className="text-[14px] font-medium"
                                                style={{
                                                    color: theme.palette.text.secondary
                                                }}
                                            >
                                                ·
                                            </p>
                                        </div>
                                        <div>
                                            <p
                                                className="text-[14px] font-medium"
                                                style={{
                                                    color: theme.palette.text.secondary
                                                }}
                                            >
                                                {date}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <div>
                                            <p
                                                className="text-[12px] font-medium p-1 rounded-md"
                                                style={{
                                                    backgroundColor: theme.palette.cyan,
                                                    color: theme.palette.primary.contrastText
                                                }}

                                            >
                                                {hashtag}
                                            </p>
                                        </div>
                                        <div>
                                            <p
                                                className="text-[12px] font-medium rounded-md"
                                                style={{
                                                    color: theme.palette.text.secondary
                                                }}

                                            >
                                                {mood}
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div>
                                <MoreHorizIcon
                                    sx={{
                                        color: theme.palette.text.primary,
                                        cursor: "pointer"
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <p
                                className="text-[16px] font-medium"
                                style={{
                                    color: theme.palette.text.primary
                                }}
                            >
                                {caption}
                            </p>
                        </div>

                        <div>
                            <img
                                src={picture}
                                className="w-full h-[40vh] object-contain cursor-pointer rounded-md"
                            />
                        </div>


                        <div className="flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <div className="flex items-center gap-1 cursor-pointer">
                                    <FavoriteBorderIcon
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontSize: 20,
                                            "& path": {
                                                strokeWidth: 2.5,
                                            },
                                        }}
                                    />
                                    <span
                                        className="text-[16px] font-medium"
                                        style={{
                                            color: theme.palette.text.secondary
                                        }}
                                    >
                                        12.4k
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 cursor-pointer">
                                    <CommentIcon
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontSize: 20,
                                            "& path": {
                                                strokeWidth: 2.5,
                                            },
                                        }}
                                    />
                                    <span
                                        className="text-[16px] font-medium"
                                        style={{
                                            color: theme.palette.text.secondary
                                        }}
                                    >
                                        123
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 cursor-pointer">
                                    <RestartAltIcon
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontSize: 20,
                                            "& path": {
                                                strokeWidth: 2.5,
                                            },
                                        }}
                                    />
                                    <span
                                        className="text-[16px] font-medium"
                                        style={{
                                            color: theme.palette.text.secondary
                                        }}
                                    >
                                        1.1k
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 cursor-pointer">
                                    <BookmarkBorderIcon
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontSize: 20,
                                            "& path": {
                                                strokeWidth: 2.5,
                                            },
                                        }}
                                    />
                                </div>
                                <div className="flex items-center gap-1 cursor-pointer">
                                    <IosShareIcon
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontSize: 20,
                                            "& path": {
                                                strokeWidth: 2.5,
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Dropcard

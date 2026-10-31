"use client"

import { Skeleton } from "@mui/material"

const ServerSkeleton = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 cursor-pointer">
                <Skeleton width={30} height={30} variant="circular" />
                <div className="flex flex-col">
                    <Skeleton variant="text" width={200} />
                    <Skeleton variant="text" width={200} />
                </div>
            </div>

        </div>
    )
}

export default ServerSkeleton

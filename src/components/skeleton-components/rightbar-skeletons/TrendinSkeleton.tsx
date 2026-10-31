"use client"
import { Skeleton } from "@mui/material"

const TrendinSkeleton = () => {
    return (
        <div className="flex items-center gap-4">
            <Skeleton variant="circular" width={30} height={30} />
            <div className="flex flex-col">
                < Skeleton
                    variant="text" 
                    width={200}
                />
                < Skeleton
                    variant="text"
                    width={200}
                />
            </div>
        </div>
    )
}

export default TrendinSkeleton

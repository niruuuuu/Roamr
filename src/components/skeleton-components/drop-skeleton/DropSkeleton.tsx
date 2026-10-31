"use client"
import { Skeleton } from "@mui/material";

const DropSkeleton = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <Skeleton variant="circular" width={56} height={56} />
                <Skeleton variant="text" width={200} />
            </div>
            <div>
                <Skeleton 
                    variant="rectangular"
                    width="full"
                    height={200}
                    sx={{
                        borderRadius: "6px"
                    }}
                />
            </div>
        </div>
    )
}

export default DropSkeleton

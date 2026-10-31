"use client"

import { useTheme } from "@mui/material"
import { Skeleton } from "@mui/material"

const LeftBarSkeleton = () => {
    const theme = useTheme()

    return (
        <div
                className="mt-auto flex gap-3 items-center h-20 px-3 rounded-md cursor-pointer"
                style={{
                    backgroundColor: theme.palette.card,
                    border: `1px solid ${theme.palette.divider}`
                }}
            >
                <div className="">
                    <Skeleton
                        variant="circular" width={44} height={44}
                    />
                </div>
                <div>
                    < Skeleton 
                        variant="text"
                        width={200}
                    />
                    < Skeleton 
                        variant="text"
                        width={150}
                    />
                </div>
            </div>
    )
}

export default LeftBarSkeleton

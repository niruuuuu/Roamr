"use client"
import { useTheme } from "@mui/material"
import TrendinSkeleton from "@/components/skeleton-components/rightbar-skeletons/TrendinSkeleton"
import { useState } from "react"

const TrendingBox = () => {
    const theme = useTheme()
    const [isLoading, setIsLoading] = useState(false)

    const trendings = [
        {
            id: '01',
            title: "melbourne",
            drops: 65.6
        },
        {
            id: '02',
            title: "durga_puja",
            drops: 56.3
        },
        {
            id: '03',
            title: "new_year",
            drops: 41.9
        },
        {
            id: '04',
            title: "gsoc",
            drops: 35.4
        },
    ]

    return (
        <div className="p-4 rounded-md flex flex-col gap-6"
            style={{
                backgroundColor: theme.palette.card,
                border: `1px solid ${theme.palette.divider}`
            }}
        >
            <div className="flex justify-between">
                <p
                    className="text-[20px] font-semibold"
                    style={{
                        color: theme.palette.text.primary
                    }}
                >
                    Trending.exe
                </p>
                <span className="text-[14px] font-medium"
                    style={{
                        color: theme.palette.cyan
                    }}
                >.live</span>
            </div>

            <div className="flex flex-col gap-4">
                {
                    isLoading ? (
                        <TrendinSkeleton />
                    ) : (
                        trendings.map((trending) => (
                            <div key={trending.id} className="flex items-center gap-4 cursor-pointer">
                                <p className="text-18 font-medium"
                                    style={{
                                        color: theme.palette.text.secondary
                                    }}
                                >
                                    {trending.id}
                                </p>
                                <div className="flex flex-col">
                                    <p className="text-18 font-bold"
                                        style={{
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        #{trending.title}
                                    </p>
                                    <p className="text-16 font-medium"
                                        style={{
                                            color: theme.palette.text.secondary
                                        }}
                                    >
                                        {trending.drops} drops
                                    </p>
                                </div>
                            </div>
                        ))

                    )
                }
            </div>



        </div>
    )
}

export default TrendingBox

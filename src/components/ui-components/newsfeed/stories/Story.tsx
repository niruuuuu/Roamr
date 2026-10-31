"use client"
import StorySkeleton from "@/components/skeleton-components/StorySkeleton"
import { Skeleton, useTheme } from "@mui/material"
import { useState } from "react"

const Story = () => {
    const theme = useTheme()
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="flex gap-4 items-center">
            <div
                className="flex flex-col items-center cursor-pointer"
            >
                <img
                    src="https://scontent.cdninstagram.com/v/t51.82787-19/650043346_18242863135305265_7762989960277201012_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=102&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=tEFhS6Gq5oQQ7kNvwHMBv6G&_nc_oc=AdoSK04WQuer4URR94zVZjZdkaWXY2047ho2LEEwZVxmy6u2AihRdWVd1-ebFC_LAd0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=KsHPjyXUHyDxfWbp-n0Ccg&_nc_ss=7baaf&oh=00_AQP4si53mTBB-AtxCrVNE8vam3p4k1TdK5WgfQrGNIpHeQ&oe=6AD13C95"
                    alt=""
                    className="w-17 h-17 rounded-full"
                    style={{
                        border: `2px solid ${theme.palette.primary.main}`
                    }}
                />
                <span
                    className="text-[14px]"
                    style={{
                        color: theme.palette.text.secondary
                    }}
                >
                    niroob
                </span>
            </div>
            {
                isLoading ? (
                    <div className="flex gap-4 ">
                        <div className="w-17 h-17">
                            <StorySkeleton />
                        </div>
                        <div className="w-17 h-17">
                            <StorySkeleton />
                        </div>
                        <div className="w-17 h-17">
                            <StorySkeleton />
                        </div>

                    </div>
                ) : (
                    <div
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <img
                            src="https://scontent.cdninstagram.com/v/t51.82787-19/650043346_18242863135305265_7762989960277201012_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=102&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=tEFhS6Gq5oQQ7kNvwHMBv6G&_nc_oc=AdoSK04WQuer4URR94zVZjZdkaWXY2047ho2LEEwZVxmy6u2AihRdWVd1-ebFC_LAd0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=KsHPjyXUHyDxfWbp-n0Ccg&_nc_ss=7baaf&oh=00_AQP4si53mTBB-AtxCrVNE8vam3p4k1TdK5WgfQrGNIpHeQ&oe=6AD13C95"
                            alt=""
                            className="w-17 h-17 rounded-full"
                            style={{
                                border: `2px solid ${theme.palette.primary.main}`
                            }}
                        />
                        <span
                            className="text-[14px]"
                            style={{
                                color: theme.palette.text.secondary
                            }}
                        >
                            niroob
                        </span>
                    </div>
                )
            }

        </div>
    )
}

export default Story

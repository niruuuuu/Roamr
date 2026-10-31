"use client"
import React from 'react'
import type { ReactNode } from 'react'
import LeftSidebar from '@/components/ui-components/newsfeed/sidebars/LeftSidebar'
import { useTheme } from "@mui/material";

export default function RootLayout ({ children }: LayoutProps<"/">) {
    const theme = useTheme()
    return (
        <div
            className='w-full min-h-screen flex overflow-x-hidden'
            style={{
                backgroundColor: theme.palette.background.default
            }}
        >
            <LeftSidebar />
            { children }
        </div>
    )
}
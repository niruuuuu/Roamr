"use client"
import { useTheme } from "@mui/material"
import Search from "../../sub-components/Search"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Topbar = () => {
    const theme = useTheme()

    return (
        <div
            className="flex gap-2 w-full"
        >
            <Search />
            <div
                className="flex justify-center items-center px-4 rounded-md cursor-pointer"
                style={{
                    backgroundColor: theme.palette.card,
                    border: `1px solid ${theme.palette.divider}`
                }}
            >
                <NotificationsNoneIcon
                    sx={{
                        color: theme.palette.text.primary
                    }}
                />
            </div>

        </div>
    )
}

export default Topbar

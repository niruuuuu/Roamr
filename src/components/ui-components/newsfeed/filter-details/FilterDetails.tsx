"use client"
import { useTheme } from "@mui/material"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const FilterDetails = () => {
    const theme = useTheme()

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div>
                    <span className="text-[14px] font-medium"
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >
                        showing:
                    </span>
                </div>
                <div className="p-1 rounded-md"
                    style={{
                        backgroundColor: theme.palette.primary.main
                    }}
                >
                    <span className="text-[14px] font-medium"
                        style={{
                            color: theme.palette.primary.contrastText
                        }}
                    >
                        FOLLOWING
                    </span>
                </div>
                <div>
                    <span className="text-[14px] font-medium"
                        style={{
                            color: theme.palette.cyan
                        }}
                    >
                        ·
                    </span>
                </div>
                <div>
                    <span className="text-[14px] font-medium"
                        style={{
                            color: theme.palette.cyan
                        }}
                    >
                        2 new servers matched your vibe
                    </span>
                </div>

            </div>
            <div>
                <div className="flex gap-1">
                    <AutoAwesomeIcon
                        sx={{
                            color: theme.palette.text.secondary
                        }}
                    />
                    <span
                        className="text-[14px] font-medium"
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >sorted: elementry </span>

                </div>
            </div>
        </div>
    )
}

export default FilterDetails
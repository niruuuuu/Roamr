"use client"
import { useTheme, TextField, Button } from "@mui/material"

export default function page() {
    const theme = useTheme()

    return (
        <div className="w-[80vw] min-h-screen flex flex-col items-center overflow-x-hidden ml-[20vw] py-3">
            <div>
                <div>
                    <span
                        className="text-xl font-bold"
                        style={{
                            color: theme.palette.text.primary
                        }}
                    >
                        Change password
                    </span>
                </div>
                <div className="mt-8 flex flex-col gap-6 w-[40vw]" >
                    <div>
                        <TextField
                            label="current password"
                            type="password"
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            label="new password"
                            type="password"
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            label="confirm password"
                            type="password"
                            fullWidth
                        />
                    </div>
                    <Button
                        variant="contained" fullWidth
                    >
                        Change password
                    </Button>
                </div>
            </div>
        </div>
    )
}
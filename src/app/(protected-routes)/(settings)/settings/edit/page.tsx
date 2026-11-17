"use client"
import { Button, useTheme } from "@mui/material"
import { TextField } from "@mui/material"
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';

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
                        Edit profile
                    </span>
                </div>
                <div className="mt-8 flex flex-col gap-6" >
                    <div
                        className={`w-[40vw] py-4 px-4 rounded-md flex justify-between items-center`}
                        style={{
                            backgroundColor: theme.palette.divider
                        }}
                    >
                        <img
                            src="https://instagram.fdac90-1.fna.fbcdn.net/v/t51.89012-19/573323465_1219825463302212_7278921664109726296_n.png?stp=dst-jpg_tt6&_nc_cat=1&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.3-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xNTAuQzMifQ%3D%3D&_nc_ohc=eUs601nfd3oQ7kNvwGLIIZQ&_nc_oc=AdqTONj5Rsx9bu1fiRb6zG9u095ShMPI86m7PmTdN9mXgKjVK-uRe2pv9ALaMFout3g&_nc_zt=24&_nc_ht=instagram.fdac90-1.fna&_nc_gid=yjfE_RIs1DXh0ZkYiSym5A&_nc_ss=7baaf&_nc_ct=RQosPBUCFQIAAAA&oh=00_AQSb8Yk21Jzl3ou6TDBlzq_D9DvKIqtZgTqHxRFSuOUm6A&oe=6B021219"
                            className="w-20 h-20 rounded-full"
                        />
                        <Button
                            variant="contained"
                            sx={{
                                paddingX: "10px",
                                paddingY: "4px",
                            }}
                        >
                            Change photo
                        </Button>

                    </div>
                    <div>
                        <TextField
                            label="bio"
                            multiline
                            rows={4}
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            label="fullname"
                            type="text"
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            label="username"
                            type="text"
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            label="email"
                            type="text"
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            label="phone"
                            type="text"
                            fullWidth
                        />
                    </div>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateField label="Date of birth" format="MM-DD-YYYY" fullWidth />
                        </LocalizationProvider>
                    </div>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="gender-select-label">Gender</InputLabel>
                            <Select
                                labelId="gender-select-label"
                                id="gender-select"
                                // value={gender}
                                label="Gender"
                                // onChange={handleChange}
                            >
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="prefer-not-to-say">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Button
                        variant="contained" fullWidth
                    >
                        Submit
                    </Button>
                </div>

            </div>
        </div>
    )
}
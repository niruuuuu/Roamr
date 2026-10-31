"use client"
import { useTheme } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';


const Info = () => {
    const theme = useTheme()

    return (
        <div
            className={`w-[70%]`}
        >
            <div>
                <img
                    className="rounded-t-md w-full h-70 object-cover"
                    src="https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/481467819_1422064252535429_5569240655096864506_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x604&ctp=s1080x604&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeF29T6wx38XvgDeON8F-koU1jcoAzJKVffWNygDMkpV9-NIRosMQimLTixSJhnxQ_hO4boeqL_Zdv78pdZAdBeP&_nc_ohc=f5OrZgisuEUQ7kNvwH3VDKD&_nc_oc=AdpJnQH7sRAflZ-Awqd87podAfVnYaO4DkM4oENqFLYNLX_h9DTBzcWLBx8Sdo0Y1P8&_nc_zt=23&_nc_ht=scontent.fdac90-1.fna&_nc_gid=XF7dcG2Th3cJ6UlvlVoauA&_nc_ss=7b2a8&oh=00_AQRHCId87nY-pEdYFSXGLaGDV4ZYD3fJBGVCvqs9-eS4fg&oe=6AE95A81"
                />
            </div>
            <div
                className="rounded-b-md p-3"
                style={{
                    backgroundColor: theme.palette.card,
                    border: `1px solid ${theme.palette.divider}`
                }}>
                <div className="flex items-center justify-between">
                    <div
                        className="flex items-center gap-3"
                    >
                        <img
                            className="w-30 h-30 rounded-full object-cover"
                            src={"https://instagram.fdac90-1.fna.fbcdn.net/v/t51.82787-15/655932069_18080031308613255_3051847583275569970_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=111&_nc_map=urlgen_bucketless&ig_cache_key=Mzg1Nzk4OTUxMzkyMzIzNDc5OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTMyMC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=X1xLgg_21k8Q7kNvwFvS4Os&_nc_oc=AdrTdmu6PZUFLkJCs5BVJ6oK9AsDZFc-hnOx6aYOr4zRbvNoMOd9nz8h7rzScUoZskM&_nc_zt=23&_nc_ht=instagram.fdac90-1.fna&_nc_gid=WniicqWwj641aBoRmlN_XA&_nc_ss=7baaf&oh=00_AQQh6qV8-LSVjWEh7k-bL07scf91_W-BAxfeBaSzQ-NokQ&oe=6AE95326"}
                        />
                        <div>
                            <span
                                className="text-[24px] font-semibold"
                                style={{
                                    color: theme.palette.text.primary
                                }}
                            >
                                Samara Islam
                            </span>
                            <div
                                className="text-[18px] font-light space-x-1.5"
                                style={{
                                    color: theme.palette.text.secondary
                                }}
                            >
                                <span>
                                    @samaraislamm
                                </span>
                                <span>·</span>
                                <span>
                                    she/her
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space-x-2">
                        <span
                            className="cursor-pointer p-2 rounded-md text-20px font-medium"
                            style={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.background.default
                            }}
                        >
                            <AddIcon
                                sx={{
                                    color: theme.palette.background.default
                                }}
                            />
                            Drop
                        </span>
                        <span
                            className="cursor-pointer p-2 rounded-md"
                            style={{
                                border: `1px solid ${theme.palette.divider}`
                            }}
                        >
                            <MoreHorizIcon
                                sx={{
                                    color: theme.palette.text.secondary
                                }}
                            />
                        </span>
                    </div>
                </div>

                <div className="mt-3">
                    <span
                        className="text-[18px] font-medium"
                        style={{
                            color: theme.palette.text.primary
                        }}
                    >
                        Finding beauty in the ordinary
                    </span>
                </div>
                <div className="mt-3 flex gap-3">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span className="text-[20px] font-medium"
                            style={{
                                color: theme.palette.text.primary
                            }}
                        >
                            2273
                        </span>
                        <span className="text-[18px] font-normal"
                            style={{
                                color: theme.palette.text.secondary
                            }}
                        >
                            followers
                        </span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span className="text-[20px] font-medium"
                            style={{
                                color: theme.palette.text.primary
                            }}
                        >
                            2273
                        </span>
                        <span className="text-[18px] font-normal"
                            style={{
                                color: theme.palette.text.secondary
                            }}
                        >
                            followings
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-[20px] font-medium"
                            style={{
                                color: theme.palette.text.primary
                            }}
                        >
                            23
                        </span>
                        <span className="text-[18px] font-normal"
                            style={{
                                color: theme.palette.text.secondary
                            }}
                        >
                            drops
                        </span>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Info
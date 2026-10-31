"use client"
import { TextField, useTheme, Button } from "@mui/material"
import CollectionsIcon from '@mui/icons-material/Collections';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EqualizerIcon from '@mui/icons-material/Equalizer';


const Postbar = () => {
    const theme = useTheme()

    return (
        <div
            className="p-3 rounded-md flex gap-3 w-full items-center"
            style={{
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: theme.palette.card2
            }}
        >
            <div>
                <img
                    src="https://scontent.cdninstagram.com/v/t51.82787-19/650043346_18242863135305265_7762989960277201012_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=102&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=tEFhS6Gq5oQQ7kNvwHMBv6G&_nc_oc=AdoSK04WQuer4URR94zVZjZdkaWXY2047ho2LEEwZVxmy6u2AihRdWVd1-ebFC_LAd0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=KsHPjyXUHyDxfWbp-n0Ccg&_nc_ss=7baaf&oh=00_AQP4si53mTBB-AtxCrVNE8vam3p4k1TdK5WgfQrGNIpHeQ&oe=6AD13C95"
                    className="w-14 h-14 min-w-14 min-h-14 shrink-0 object-cover rounded-full"
                />
            </div>
            <div className="w-full">
                <TextField
                    placeholder="drop something unhinged" size="medium"
                    sx={{
                        width: "100%"
                    }}
                />
            </div>
            <div className="cursor-pointer">
                <CollectionsIcon fontSize="medium"
                    sx={{
                        color: theme.palette.text.secondary
                    }}
                />
            </div>
            <div className="cursor-pointer">
                <EqualizerIcon fontSize="medium"
                    sx={{
                        color: theme.palette.text.secondary
                    }}
                />
            </div>
            <div className="cursor-pointer">
                <FmdGoodIcon fontSize="medium"
                    sx={{
                        color: theme.palette.text.secondary
                    }}
                />
            </div>
            <div className="cursor-pointer">
                <Button variant="contained">
                    Drop
                </Button>
            </div>
        </div>
    )
}

export default Postbar

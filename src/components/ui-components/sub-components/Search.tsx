"use client";

import { useState } from "react";
import {
    TextField,
    InputAdornment,
    IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material";

export default function SearchBar() {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        console.log("Searching for:", search);
    };

    const theme = useTheme

    return (
        <TextField
            fullWidth
            placeholder="search servers, cities, drops..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
            }}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="search"
                                onClick={handleSearch}
                                edge="end"
                            >
                                <SearchIcon  />
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
            sx={{
                width: '100%',
                "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    marginRight: 1.5
                },
            }}
        />
    );
}
// theme.ts
import { createTheme } from "@mui/material/styles";

// Design tokens
export const tokens = {
    background: "#08090d",
    foreground: "#f2f4f8",
    border: "#1e2532",
    input: "#11161f",
    primary: "#c8ff2e",
    primaryForeground: "#0a0d02",
    secondary: "#1a2230",
    secondaryForeground: "#c8ff2e",
    muted: "#151b26",
    mutedForeground: "#8a94a8",
    card: "#0e131b",
    card2: "#151c28",
    neon: "#c8ff2e",
    violet: "#8b5cf6",
    cyan: "#22d3ee",
    pink: "#ff4bd8",
    orange: "#ff7a1a",
    success: "#34d399",
    error: "#f87171", // not in your list, a dark-friendly red; change as needed
} as const;

// Custom palette fields (typed below)
declare module "@mui/material/styles" {
    interface Palette {
        neon: string;
        violet: string;
        cyan: string;
        pink: string;
        orange: string;
        muted: { main: string; foreground: string };
        card: string;
        card2: string;
        input: string;
    }
    interface PaletteOptions {
        neon?: string;
        violet?: string;
        cyan?: string;
        pink?: string;
        orange?: string;
        card: string;
        muted?: { main: string; foreground: string };
        card2?: string;
        input?: string;
    }
}

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: tokens.primary,
            contrastText: tokens.primaryForeground,
        },
        secondary: {
            main: tokens.secondary,
            contrastText: tokens.secondaryForeground,
        },
        background: {
            default: tokens.background,
            paper: tokens.card,
        },
        text: {
            primary: tokens.foreground,
            secondary: tokens.mutedForeground,
        },
        divider: tokens.border,
        error: { main: tokens.error },
        success: { main: tokens.success },
        warning: { main: tokens.orange },
        info: { main: tokens.cyan },

        // Custom tokens
        neon: tokens.neon,
        violet: tokens.violet,
        cyan: tokens.cyan,
        pink: tokens.pink,
        orange: tokens.orange,
        muted: { main: tokens.muted, foreground: tokens.mutedForeground },
        card: tokens.card,
        card2: tokens.card2,
        input: tokens.input,
    },
    shape: { borderRadius: 12 },
    typography: {
        fontFamily: "var(--font-inter), sans-serif",
        h1: { fontFamily: "var(--font-sora), sans-serif", fontWeight: 700 },
        h2: { fontFamily: "var(--font-sora), sans-serif", fontWeight: 700 },
        h3: { fontFamily: "var(--font-sora), sans-serif", fontWeight: 700 },
        button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: tokens.background,
                    color: tokens.foreground,
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: { boxShadow: "none", padding: "10px 20px" },
                containedPrimary: {
                    "&:hover": {
                        backgroundColor: tokens.primary,
                        filter: "brightness(0.92)",
                        boxShadow: `0 0 16px ${tokens.primary}55`,
                    },
                },
                containedSecondary: {
                    border: `1px solid ${tokens.border}`,
                    "&:hover": { backgroundColor: tokens.card2 },
                },
                outlined: {
                    borderColor: tokens.border,
                    color: tokens.foreground,
                    "&:hover": {
                        borderColor: tokens.primary,
                        backgroundColor: tokens.muted,
                    },
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none", // removes MUI's dark-mode overlay tint
                    border: `1px solid ${tokens.border}`,
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: tokens.card,
                    border: `1px solid ${tokens.border}`,
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: tokens.input,
                    borderRadius: 12,
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: tokens.border,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: tokens.mutedForeground,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: tokens.primary,
                        borderWidth: 2,
                    },
                    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: tokens.error,
                    },
                    "&.Mui-disabled": {
                        backgroundColor: tokens.muted,
                    },
                },
                input: {
                    color: tokens.foreground,
                    "&::placeholder": {
                        color: tokens.mutedForeground,
                        opacity: 0.7,
                    },
                    // Fix browser autofill turning the field white
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: `0 0 0 100px ${tokens.input} inset`,
                        WebkitTextFillColor: tokens.foreground,
                        caretColor: tokens.foreground,
                    },
                },
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: tokens.mutedForeground,
                    "&.Mui-focused": { color: tokens.primary },
                    "&.Mui-error": { color: tokens.error },
                },
            },
        },

        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginLeft: 4,
                    color: tokens.mutedForeground,
                    "&.Mui-error": { color: tokens.error },
                },
            },
        },

        MuiDivider: {
            styleOverrides: {
                root: { borderColor: tokens.border },
            },
        },
        MuiSkeleton: {
            defaultProps: { animation: "wave" },
            styleOverrides: {
                root: { backgroundColor: tokens.muted },   // #151b26
            },
        },
    },
});

export default theme;
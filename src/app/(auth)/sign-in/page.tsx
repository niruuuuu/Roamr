"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignInFormData, signinSchema } from "@/schemas/signin.schema";
import { Alert, IconButton, InputAdornment, Snackbar, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material";
import type { FormEventHandler } from "react";

function page() {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<SignInFormData>({
        mode: "onBlur",
        resolver: zodResolver(signinSchema)
    })
    const router = useRouter()
    const theme = useTheme()

    const [showPassword, setShowPassword] = useState(true)
    const [signinButtonLoading, setSignInButtonLoading] = useState(false)
    const [invalidCredential, setInvalidCredentiald] = useState(false)
    const [notVerified, setNotVerified] = useState(false)
    const [username, setUsername] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        // Prevents the alert from closing if the user clicks outside
        if (reason === 'clickaway') {
            return;
        }
        setError(false);
    };


    async function onSubmit(data: SignInFormData) {
        setSignInButtonLoading(true)
        setInvalidCredentiald(false)
        setNotVerified(false)
        setUsername('')

        try {
            const result = await signIn("credentials", {
                identifier: data.email,
                password: data.password,
                redirect: false
            })

            if (!result) {
                setError(true)
                setErrorMessage("Something went wrong. Try again")
                return setSignInButtonLoading(false);
            }
            console.log(result)

            if (!result?.ok) {
                setSignInButtonLoading(false);
                if (result.error == "USER_NOT_VERIFIED") {
                    const response = await axios.get(`/api/create-verification-session/${data.email}`)
                    if (response.status === 200) {
                        router.push(`/verify-account/${response.data.username}`)
                    }
                }
                if (result.status == 401) {
                    return setInvalidCredentiald(true)
                }
                setError(true)
                setErrorMessage("Something went wrong")
            } else {
                console.log("djdjdj")
                setSignInButtonLoading(false);
                router.push("/feed")
            }

        } catch (error: any) {
            console.log(error, "shs")
            if (error?.response.status === 403) {
                setNotVerified(true)
                setUsername(error?.response.data.username)
                setSignInButtonLoading(false)
                return
            }
            if (error?.response.status === 401) {
                setInvalidCredentiald(true)
                setSignInButtonLoading(false)
                return
            }

        }
    }

    return (
        <div
            className='w-full min-h-screen flex justify-center items-center'
            style={{
                backgroundColor: theme.palette.background.default
            }}
        >
            <Snackbar
                open={error}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert severity="error" variant="filled">
                    {errorMessage}
                </Alert>
            </Snackbar>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-auto h-auto px-10 py-10 rounded-sm flex flex-col gap-4'
                style={{
                    backgroundColor: theme.palette.card
                }}
            >
                <div className='w-full flex flex-col gap-2 items-center mb-4'>
                    <h1
                        className='text-3xl font-bold'
                        style={{
                            color: theme.palette.text.primary
                        }}
                    >
                        Welcome back
                    </h1>
                    <p
                        className='text-xl font-semibold'
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >
                        Sign in to continue exploring cities with Roamr.
                    </p>
                </div>
                <TextField
                    {...register("email")}
                    label="Email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    fullWidth
                />
                <TextField
                    {...register("password")}
                    label="Password"
                    type={showPassword ? "password" : "text"}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    fullWidth
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        onMouseDown={(e) => e.preventDefault()}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                    }}
                />
                <div className='w-full flex flex-col items-center mt-2 gap-4'>
                    <Button
                        type="submit"
                        fullWidth
                        loading={signinButtonLoading} loadingIndicator="Loading…"
                        variant="contained"
                        sx={{
                            border: "none",
                            "&:hover": { boxShadow: "0 6px 20px rgba(76, 63, 209, 0.3)" },
                        }}
                    >
                        Signin
                    </Button>
                    <p className='text-[#6B6885]'> 
                        Don't have an account? {" "}
                        <Link style={{
                            color: theme.palette.primary.main
                        }} href={"/sign-up"}>Sign Up</Link>
                    </p>
                    <div className="">
                        {
                            notVerified && (
                                <p
                                    style={{
                                        color: theme.palette.error.main
                                    }}
                                >
                                    You are not verified. Check your email for the otp and {" "}
                                    <Link className="font-semibold underline " href={`/verify/${username}`}
                                        style={{
                                            color: theme.palette.primary.main
                                        }}
                                    >
                                        verify your account
                                    </Link>
                                </p>
                            )
                        }
                        {
                            invalidCredential && (
                                <p
                                    style={{
                                        color: theme.palette.error.main
                                    }}
                                >
                                    Invalid credentials
                                </p>
                            )
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default page
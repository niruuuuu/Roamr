"use client"
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema } from '@/schemas/signup.schema'
import { z } from "zod"
import { IconButton, InputAdornment, Slide, SlideProps, Snackbar, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { SignupFormData } from '@/schemas/signup.schema'
import axios, { AxiosError } from "axios"
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/navigation'
import { useTheme } from '@mui/material'

const page = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<z.infer<typeof signupSchema>>({
        mode: "all",
        resolver: zodResolver(signupSchema)
    })
    const router = useRouter()
    const theme = useTheme()

    const [showPassword, setShowPassword] = useState(false)
    const [signupButtonLoading, setSignupButtonLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [usernameError, setUsernameError] = useState(false)
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("")
    const [open, setOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [emailExist, setEmailExist] = useState(false)
    const [email, setEmail] = useState("")

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        // Prevents the alert from closing if the user clicks outside
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    async function onSubmit(data: SignupFormData) {
        setSignupButtonLoading(true)

        try {
            const response = await axios.post(`/api/sign-up`, data)
            console.log(response)
            if (response.status == 201) {
                router.replace(`/verify-account/${response.data?.user.username}`)
            }
        } catch (error: any) {
            setOpen(true)
            setErrorMessage(error.response.data.message)
            console.log(error.response)
            if (error.response?.status == 409) {
                return setEmailExist(true)
            }
        }

    }

    async function fetchUsername() {
        try {
            const response = await axios.get(`/api/username-exist/${username}`)
            const { data } = response
            if (data.success && !data.available) {
                setUsernameError(true)
                setUsernameErrorMessage(data.message)
            }
            if (data.success && data.available) {
                setUsernameError(false)
                setUsernameErrorMessage("")
            }
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchUsername()
    }, [username])

    function SlideTransition(props: SlideProps) {
        return <Slide {...props} direction="down" />;
    }

    return (
        <div
            className='w-full min-h-screen flex flex-col justify-center items-center'
            style={{
                backgroundColor: theme.palette.background.default
            }}
        >
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                transitioncomponent={SlideTransition}
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
                        Roam like you belong
                    </h1>
                    <p
                        className='text-xl font-semibold text-[#6B6885]'
                        style={{
                            color: theme.palette.text.secondary
                        }}
                    >
                        Join Roamr and see cities the way locals do.
                    </p>
                </div>
                <div className='flex gap-4'>
                    <TextField
                        {...register("fullname")}
                        label="Fullname"
                        error={!!errors.fullname}
                        helperText={errors.fullname?.message}
                    />
                    <TextField
                        {...register("username")}
                        label="Username"
                        error={!!errors.username || usernameError}
                        helperText={usernameErrorMessage || errors.username?.message}
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                </div>
                <TextField
                    {...register("email")}
                    label="Email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    {...register("password")}
                    label="Password"
                    type={showPassword ? "text" : "password"}
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
                            ),
                        },
                    }}
                />
                <div className='w-full flex flex-col items-center mt-2 gap-4'>
                    <Button
                        type="submit"
                        fullWidth
                        loading={signupButtonLoading} loadingIndicator="Loading…"
                        variant="contained"
                        sx={{
                            border: "none",
                            "&:hover": { boxShadow: "0 6px 20px rgba(76, 63, 209, 0.3)" },
                        }}
                    >
                        Signup
                    </Button>
                    <p className='text-[#6B6885]'>
                        Already have an account? {" "}
                        <Link
                            style={{
                                color: theme.palette.primary.main
                            }}
                            href={"/sign-in"}
                        >
                            Sign In
                        </Link>
                    </p>
                    {
                        emailExist && (
                            <div className='flex flex-col items-center'>
                                <p
                                    style={{
                                        color: theme.palette.error.main
                                    }}
                                >
                                    Acccount already exist with {email} { }
                                </p>
                                <Link href="/sign-in" className='underline text-[#4C3FD1]'>
                                    Login to your account
                                </Link>

                            </div>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default page

"use client"

import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import { Snackbar, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { verifySchema, OTP } from '@/schemas/verifyCode.schema'
import axios from 'axios'
import { redirect, useParams } from 'next/navigation'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const VerifyForm = ({ email }: { email: string }) => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<z.infer<typeof verifySchema>>({
        mode: "all",
        resolver: zodResolver(verifySchema)
    })
    const params = useParams()
    const [isVerifyButtonLoading, setIsVerifyButtonLoading] = useState(false)
    const [otpError, setOtpError] = useState(false)
    const [otpErrorMessage, setOtpErrorMessage] = useState("")
    const router = useRouter()

    async function onSubmit(data: OTP) {
        setIsVerifyButtonLoading(true)
        setOtpError(false)
        setOtpErrorMessage('')

        try {
            const response = await axios.post(`/api/verify/${params.username}`, data)
            console.log(response.status)
            if (response.status == 200) {
                console.log("in if 200")
                router.push("/dashboard")
            }
        } catch (error: any) {
            console.log("in error")
            setOtpError(true)
            setOtpErrorMessage(error.response?.data.message || "Something went wrong. Try again")
            setIsVerifyButtonLoading(false)
        }
    }

    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-[#F8F7FC]'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-auto h-auto bg-[#FFFFFF] px-10 py-10 rounded-sm flex flex-col gap-4 border-1-[#E4E2F1]'
            >
                <div className='w-full flex flex-col gap-2 items-center mb-4'>
                    <h1 className='text-3xl font-bold text-[#16132B]'>
                        Almost there, ROAMR
                    </h1>
                    <p className='text-xl font-semibold text-[#6B6885]'>
                        Enter the code we sent to { email } to verify your account.
                    </p>
                </div>
                <TextField
                    {...register("otp")}
                    label="OTP"
                    error={!!errors.otp}
                    helperText={errors.otp?.message}
                />
                <Button
                    type='submit'
                    variant='contained'
                    loading={isVerifyButtonLoading} loadingIndicator="Verifying..."
                >
                    Verify Account
                </Button>
                {
                    otpError && (
                        <div className='flex flex-col items-center'>
                            <p className='text-red-400'>
                                { otpErrorMessage }
                            </p>

                        </div>
                    )
                }

            </form>
        </div>
    )
}

export default VerifyForm

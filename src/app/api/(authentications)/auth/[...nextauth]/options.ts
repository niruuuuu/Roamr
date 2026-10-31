import { NextAuthOptions } from "next-auth";
import connectDB from "@/lib/connectDB";
import UserModel from "@/models/user.model";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { sendVerificationEmail } from "@/lib/sendEmail";
import SessionModel from "@/models/verificationSession.model";
import crypto from "crypto"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                identifier: { label: "Identifier", type: "text", placeholder: "email, username or phone number" },
                password: { label: "Password", type: "Password", placeholder: "password" }
            },
            async authorize(credentials: any): Promise<any> {
                await connectDB()
                try {
                    const user = await UserModel.findOne({ email: credentials.identifier })
                    if (!user) {
                        console.log("Email not found in the database | nextauth authOptions")
                        return null;
                    }

                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                    console.log(isPasswordCorrect)
                    if (!isPasswordCorrect) {
                        console.log("Incorrect password | nextauth authOptions")
                        return null
                    }
                    if (!user.isVerified) {
                        console.log("User not verified | nextauth authOptions")
                        throw new Error("USER_NOT_VERIFIED")
                    }
                    console.log("jfjfhjfg")

                    return {
                        id: user._id.toString(),
                        _id: user._id.toString(),
                        fullname: user.fullname,
                        username: user.username,
                        email: user.email,
                        isVerified: user.isVerified,
                    };;

                } catch (error: any) {
                    console.log("Error in authorize method | nextauth authOptions", error)
                    throw new error
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id
                token.fullname = user.fullname
                token.email = user.email
                token.username = user.username
            }
            return token
        },

        async session({ session, token }) {
            if (token) {
                session.user.fullname = token.fullname
                session.user._id = token._id
                session.user.email = token.email
                session.user.username = token.username
            }
            return session
        }
    },
    pages: {
        signIn: "/sign-in",
        error: "/sign-in"
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { success } from "zod";

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token;
        const { pathname } = req.nextUrl;
        const url = req.nextUrl.clone()
        // console.log(token, "mid 1")

        const isAuthPage = (
            pathname.startsWith("/sign-in") ||
            pathname.startsWith("/sign-up") ||
            pathname.startsWith("/verify")
        )
        const isApi = (
            pathname.startsWith("/api")
        )

        if (!token) {
            // ui endpoints
            if (
                pathname.startsWith("/feed") ||
                pathname === "/"
            ) {
                url.pathname = "/sign-in"
                return NextResponse.redirect(url)
            }

            if (isAuthPage) {
                return NextResponse.next()
            }

            // api endpoints
            if (
                pathname.startsWith("/api/change-password") ||
                pathname.startsWith("/api/update-profile") ||
                pathname.startsWith("/api/complete-profile")
            ) {
                url.pathname = "/api/invalid-request"
                return NextResponse.redirect(url)
            }
        }
        
        if (token) {
            // ui endpoints
            // authentication
            if (
                pathname.startsWith("/sign-in") ||
                pathname.startsWith("/sign-up") ||
                pathname.startsWith("/verify")
            ) {
                url.pathname = "/feed"
                return NextResponse.redirect(url);
            }
            if (pathname === "/") {
                return NextResponse.rewrite(new URL("/feed", req.nextUrl));
            }
            // request continue successfully
            if (
                pathname.startsWith("/profile") ||
                pathname.startsWith("/feed")
            ) {
                return NextResponse.next()
            }

            // api endpoints - authentication
            if (
                pathname.startsWith("/api/auth") ||
                pathname.startsWith("/api/sign-up") ||
                pathname.startsWith("/api/verify") ||
                pathname.startsWith("/api/create-verification-session")
            ) {
                console.log("Requesting sign-in, up or verification endpoints while logged in | Middleware")
                url.pathname = "/api/invalid-request"
                return NextResponse.redirect(url)
            }

            if (
                pathname.startsWith("/api/update-profile") ||
                pathname.startsWith("/api/change-password") 
            ) {
                return NextResponse.next()
            }

        }

        return NextResponse.next();

    },
    {
        secret: process.env.NEXTAUTH_SECRET,
        pages: { signIn: "/sign-in", error: "/sign-in" },
        callbacks: {
            authorized: ({ token, req }) => {
                // console.log(token, "midd")
                if (token) {
                    return true
                } else {
                    if (
                        req.nextUrl.pathname.startsWith("/sign-in") ||
                        req.nextUrl.pathname.startsWith("/sign-up") ||
                        req.nextUrl.pathname.startsWith("/verify")
                    ) {
                        return true
                    }
                    return false
                }
            }
        },
    }
);

export const config = {
    matcher: [
        "/",
        "/feed/:path*",
        "/sign-up",
        "/sign-in",
        "/verify/:path*",
        "/profile/:path",
        "/api/change-password",
        "/api/update-profile",
        "/api/complete-profile",
    ],
};
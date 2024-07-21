import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    if (!req.nextauth.token) {
      return NextResponse.redirect("/login")
    }
    console.log("From the middleware",req.url, req.nextauth.token)
    return NextResponse.next()
  },
)

export const config = { matcher: ["/dashboard", "/admins", "/analytics", "/certificates", "/settings", "/uploads"] }
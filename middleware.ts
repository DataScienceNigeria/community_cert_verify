// import { withAuth } from "next-auth/middleware"
// import { NextResponse } from "next/server"

// export default withAuth(
//   function middleware(req) {
//     if (!req.nextauth.token) {
//       console.log("req.nextauth.token From the middleware", req.nextauth.token)
//       return NextResponse.redirect("/login")
//     }
//     console.log("From the middleware",req.url, req.nextauth.token)
//     return NextResponse.next()
//   },
// )

// export const config = { matcher: ["/dashboard", "/admins", "/analytics", "/certificates", "/settings", "/uploads"] }

import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    
    // Additional debugging information
    console.log("Middleware execution context:", req.url, "Token:", token);
    
    // Check for token and redirect if not present
    if (!token) {
      console.log("No token found, redirecting to login");
      return NextResponse.redirect("/login");
    }
    
    // Token is present, continue to next response
    console.log("Token found, proceeding to next response");
    return NextResponse.next();
  },
);

export const config = { matcher: ["/dashboard", "/admins", "/analytics", "/certificates", "/settings", "/uploads"] };

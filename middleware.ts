import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token")?.value;
//   const { pathname } = request.nextUrl;

//   const isProtectedRoute =
//     pathname.startsWith("/products") || pathname.startsWith("/cart");

//   const isLoginPage = pathname.startsWith("/login");

//   // Not logged in → block protected routes
//   if (!token && isProtectedRoute) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   // Logged in → block login page
//   if (token && isLoginPage) {
//     return NextResponse.redirect(new URL("/products", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/products/:path*", "/cart/:path*", "/login"],
// };

// ---------------------------------------------------------------------------
// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token")?.value;

//   console.log("MIDDLEWARE TOKEN:", token);

//   return NextResponse.next();
// }

// ------------------------------------------------------
// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token")?.value;
//   const { pathname, search } = request.nextUrl;

//   const isProtectedRoute =
//     pathname.startsWith("/products") || pathname.startsWith("/cart");

//   if (search.includes("_rsc")) {
//     return NextResponse.next();
//   }

//   if (!token && isProtectedRoute) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/products/:path*", "/cart/:path*"],
// };

// -----------------------------------------------------------

export function middleware() {
  return;
}

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url))
  }

  if (!pathname.startsWith("/en") && !pathname.startsWith("/it")) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

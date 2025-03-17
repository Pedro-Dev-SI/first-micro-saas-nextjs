import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./lib/get-url";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('authjs.session-token');
    const pathname = request.nextUrl.pathname;

    console.log(`Middleware: token = ${token?.value}, pathname = ${pathname}`);

    if (pathname === '/auth' && token) {
        return NextResponse.redirect(new URL(getUrl('/app')))
    }

    if (pathname === '/app' && !token) {
        return NextResponse.redirect(new URL(getUrl('/auth')))
    }
}

export const config = {
    matcher: ['/auth', '/app'],
};
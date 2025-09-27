import { NextRequest, NextResponse } from "next/server";
import extractSubdomain from "@/helpers/extract-subdomain";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const subdomain = extractSubdomain(request);

    if (subdomain) {
        // Block access to admin page from subdomains
        if (pathname.startsWith('/admin')) {
            return NextResponse.redirect(new URL('/', request.url));
        }

        // Put subdomain in header so server component and api can use it value
        const response = NextResponse.next();
        response.headers.set('x-tenant', subdomain);

        return response
    }

    // On the root domain, allow normal access
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all paths except for:
         * 1. /api routes
         * 2. /_next (Next.js internals)
         * 3. all root files inside /public (e.g. /favicon.ico)
         */
        '/((?!api|_next|[\\w-]+\\.\\w+).*)'
    ]
};

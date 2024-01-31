import {NextRequest} from "next/server";

export function middleware(request: NextRequest) {

    const publicRoutes = [
        '/countdown'
    ]

    const { nextUrl } = request;

    const isDevelopmentMode = request.url.includes('http://localhost:3000');
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isPaymentAPIRoute = nextUrl.pathname.startsWith('api/payment');

    if (isPaymentAPIRoute) {
        return null;
    }

    if (!isPublicRoute && isDevelopmentMode) {
        return Response.redirect(new URL (
            `${publicRoutes[0]}`,
            nextUrl
        ))
    }
}

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
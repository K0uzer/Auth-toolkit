import NextAuth from 'next-auth'

import authConfig from './auth.config'
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
} from 'routes'

const { auth } = NextAuth(authConfig)

export default auth((reg) => {
    const { nextUrl } = reg

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    const isLoggedIn = !!reg.auth

    if (isApiAuthRoute) {
        return null
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL('/auth/login', nextUrl))
    }

    return null
})

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    ],
}

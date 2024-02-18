import { i18nRouter } from 'next-i18n-router';
import { i18nConfig } from '../i18nConfig';
import { authMiddleware } from '@clerk/nextjs';
import { NextRequest } from 'next/server';


export default authMiddleware({
    beforeAuth:(request) => {
        return i18nRouter(request, i18nConfig);
    },
    debug:true,

   publicRoutes: (req) => !req.url.includes("/dashboard"),
})


// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};
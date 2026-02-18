import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['ca', 'es', 'en', 'gl', 'eu'],

    // Used when no locale matches
    defaultLocale: 'ca'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(es|en|ca|gl|eu)/:path*']
};

import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { pathnames, locales, defaultLocale, localePrefix } from './config'

// export default createMiddleware({
//   defaultLocale,
//   localePrefix,
//   pathnames,
//   locales
// });

export function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    defaultLocale,
    localePrefix,
    pathnames,
    locales,
  })
  const response = handleI18nRouting(request)
  return response
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|!_next|.*\\..*).*)'],
}

import { Pathnames } from 'next-intl/navigation'

export const defaultLocale = 'zh'

export const locales = ['en', 'zh'] as const

// Use the default: `always`
export const localePrefix = 'as-needed'

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    zh: '/pfadnamen',
  },
} satisfies Pathnames<typeof locales>

export type AppPathnames = keyof typeof pathnames

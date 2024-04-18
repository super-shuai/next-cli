import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { getTranslations } from 'next-intl/server'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'index' })

  return {
    title: t('title'),
    description: t('desc'),
  }
}

export default function BasicLayout({ children, params: { locale } }: Readonly<Props>) {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <head></head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

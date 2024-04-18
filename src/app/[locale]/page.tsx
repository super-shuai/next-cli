'use client'

import { useTranslations } from 'next-intl'
import Layout from '@/components/Layout'
export default function Home() {
  const t = useTranslations('index')
  return (
    <Layout curActive="/index">
      <main>
        <div>
          <h3>{t('try')}</h3>
          Index
        </div>
      </main>
    </Layout>
  )
}

'use client'
import { useTranslations } from 'next-intl'
import Layout from '@/components/Layout'
import styles from './index.module.less'

export default function Lender({ params: { locale: string } }) {
  const t = useTranslations('user')

  return (
    <Layout curActive="/lender">
      <main className={styles.userWrap}>
        <div className={styles.content}>
          <h3>{t('userList')}</h3>
          lender
        </div>
      </main>
    </Layout>
  )
}

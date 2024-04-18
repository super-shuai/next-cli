import React from 'react'

const getNavList = (t: any) => {
  return [
    {
      key: '/',
      label: t('home'),
      children: [
        {
          key: '/dashboard',
          label: 'aa',
        },
        {
          key: '/dashboard/monitor',
          label: 'aaa',
        },
      ],
    },
    {
      key: '/about',
      label: t('about'),
    },
    {
      key: '/lender',
      label: 'Lender',
    },
    {
      key: '/pathnames',
      label: 'Pathnames',
    },
  ]
}

export default getNavList

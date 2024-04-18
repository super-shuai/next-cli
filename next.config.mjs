/** @type {import('next').NextConfig} */
import withAntdLess from 'next-plugin-antd-less'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig = {
  env: {
    BASE_API_URL: process.env.BASE_API,
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      // /api接口优先自己路由，没有做代理
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API}/api/:path*`,
      },
    ]
  },
}

const withNextIntl = createNextIntlPlugin()(nextConfig)

export default withAntdLess(withNextIntl)

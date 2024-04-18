这是基于nextjs开箱即用的脚手架，Typescript、Tailwind CSS、next-intl多语言路由跳转seo友好，多种env环境

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 技术栈

nextjs + react + ts + tailwind + next-intl

## 目录结构

```
├── README.md
├── global.d.ts                     //全局ts
├── next-env.d.ts
├── next.config.mjs                 // next配置文件
├── package.json                    //package.json
├── postcss.config.js               // 预处理css
├── public                          // 静态文件目录
│   ├── next.svg
│   └── vercel.svg
├── src                             // src目录
│   ├── app                         // app应用用来放页面
│   │   ├── [locale]                // 语言路由
│   │   │   ├── about               // about页面
│   │   │   │   ├── index.module.less
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── lender              // lender页面
│   │   │   │   ├── index.module.less
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   ├── pathnames
│   │   │   │   ├── index.module.less
│   │   │   │   └── page.tsx
│   │   │   └── riplay
│   │   │       ├── index.module.less
│   │   │       └── page.tsx
│   │   ├── api                    // api路由文件夹
│   │   │   ├── news
│   │   │   │   └── route.ts
│   │   │   └── user
│   │   │       └── route.ts
│   │   ├── favicon.ico
│   │   ├── globals.css             // 全局css
│   │   ├── layout.tsx              // 主页
│   │   └── not-found.tsx           // 404页面
│   ├── components
│   │   └── Layout                  // 模版
│   │       ├── Footer.tsx          // 模版底部
│   │       ├── Header.tsx          // 模版头部
│   │       ├── LocaleSwitcher.tsx  // 语言组件
│   │       ├── LocaleSwitcherSelect.tsx
│   │       ├── Menu.tsx            // 菜单文件
│   │       ├── index.module.less
│   │       └── index.tsx
│   ├── config.ts                   // 语言配置文件
│   ├── i18n.ts                     // i18n
│   ├── lib                         // lib 文件
│   │   ├── axios                   // axios用来发起客户端请求
│   │   │   └── index.ts
│   │   └── utils
│   │       └── index.ts
│   ├── locales                    //多语言文件
│   │   ├── en.json
│   │   └── zh.json
│   ├── middleware.ts             // 中间件
│   └── navigation.tsx            // 多语言导航文件
├── tailwind.config.ts            // tailwind css文件
└── .env                          // 环境变量文件
└── .env.development              // dev开发环境变量
└── .env.production               // 生产环境变量
└── .env.test                     // 测试环境变量
├── tsconfig.json                 // ts配置文件
└── yarn.lock

```
